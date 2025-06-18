const extractPathname = (req) =>
  req._url.pathname === "/" ? "index.html" : req._url.pathname;

const serveStaticRoute = async (req) => {
  try {
    const filepath = extractPathname(req);
    const body = await Deno.readFile(`${filepath}`);

    return new Response(body, {
      headers: { "content-type": mime.getType(filepath) },
    });
  } catch {
    return notFound();
  }
};

const handler = (req, routes) => {
  try {
    const route = routes[req.method].find(({ pattern }) =>
      pattern.test(req.url)
    );

    const groups = route?.pattern.exec(req.url).pathname.groups;
    req.context.params = groups;

    const handleRoute = route?.handler || serveStaticRoute;

    return handleRoute(req);
  } catch {
    return new Response("NOT FOUND", {
      status: 404,
      Headers: {
        "content-type": "text/html",
      },
    });
  }
};

const createHandler = (todo, routes) => {
  return (request) => {
    request._url = new URL(request.url);
    request.context = { todo };

    return handler(request, routes);
  };
};

export { createHandler };
