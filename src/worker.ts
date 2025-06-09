interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    // For static assets (files with extensions), try to serve them directly
    if (url.pathname.includes('.') && !url.pathname.endsWith('.html')) {
      try {
        return await env.ASSETS.fetch(request);
      } catch {
        return new Response('Asset not found', { status: 404 });
      }
    }
    
    // For SPA routes (no extension or .html), serve index.html
    try {
      const indexRequest = new Request(
        new URL('/', request.url).toString(),
        request
      );
      return await env.ASSETS.fetch(indexRequest);
    } catch {
      return new Response('Page not found', { status: 404 });
    }
  },
};
