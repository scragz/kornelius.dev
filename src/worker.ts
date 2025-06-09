/// <reference types="@cloudflare/workers-types" />
import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

interface Env {
  __STATIC_CONTENT: KVNamespace;
  __STATIC_CONTENT_MANIFEST: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    try {
      // First, try to serve the exact requested file
      const response = await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: JSON.parse(env.__STATIC_CONTENT_MANIFEST),
          mapRequestToAsset: mapRequestToAsset,
        }
      );
      
      return response;
    } catch {
      // If the exact file wasn't found, check if it's a potential SPA route
      // (not a request for a static asset like .js, .css, .png, etc.)
      if (!url.pathname.includes('.') || url.pathname.endsWith('.html')) {
        try {
          // Serve index.html for SPA routing
          const indexRequest = new Request(`${url.protocol}//${url.host}/index.html`, {
            method: request.method,
            headers: request.headers,
          });
          
          return await getAssetFromKV(
            {
              request: indexRequest,
              waitUntil: ctx.waitUntil.bind(ctx),
            },
            {
              ASSET_NAMESPACE: env.__STATIC_CONTENT,
              ASSET_MANIFEST: JSON.parse(env.__STATIC_CONTENT_MANIFEST),
              mapRequestToAsset: mapRequestToAsset,
            }
          );
        } catch {
          // If even index.html can't be served, return 404
          return new Response('Not found', { status: 404 });
        }
      }
      
      // For static assets that weren't found, return 404
      return new Response('Asset not found', { status: 404 });
    }
  },
};
