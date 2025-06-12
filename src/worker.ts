interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // For static assets (files with extensions like .js, .css, .png, etc), try to serve them directly
    const staticAssetExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.json', '.xml', '.txt'];
    const hasStaticExtension = staticAssetExtensions.some(ext => url.pathname.endsWith(ext));

    if (hasStaticExtension) {
      try {
        return await env.ASSETS.fetch(request);
      } catch {
        return new Response('Asset not found', { status: 404 });
      }
    }

    // For SPA routes (no extension or .html), serve index.html
    // This handles all client-side routes
    try {
      const indexRequest = new Request(
        new URL('/', request.url).toString(),
        {
          method: request.method,
          headers: request.headers,
        }
      );
      const response = await env.ASSETS.fetch(indexRequest);

      // Make sure we return the response with proper headers for HTML
      return new Response(response.body, {
        status: response.status,
        headers: {
          ...Object.fromEntries(response.headers),
          'Content-Type': 'text/html; charset=utf-8',
        },
      });
    } catch {
      return new Response('Page not found', { status: 404 });
    }
  },
};
