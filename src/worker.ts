interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    // Check if the request is for a static asset
    if (url.pathname.includes('.') && !url.pathname.endsWith('.html')) {
      // This is likely a static asset (JS, CSS, images, etc.)
      // Let Workers Assets handle it
      return env.ASSETS.fetch(request);
    }
    
    // For all other requests (SPA routes), serve index.html
    const indexRequest = new Request(new URL('/', request.url), request);
    return env.ASSETS.fetch(indexRequest);
  },
};
