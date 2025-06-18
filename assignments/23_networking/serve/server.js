const handlePortfolio = (req) => {
  const params = req._url.searchParams;
  const name = params.get("name");

  return new Response(`<h1>Hello ${name || "anonymous"}!</h1>`, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const handleGreet = (req) => {
  const name = req._url.searchParams.get("name");

  return new Response(`<h1>Hello ${name || "World"}!</h1>`, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const handleDholakpur = async (req) => {
  const body = await Deno.readFile("index.html");
  return new Response(body, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const handleStyles = async (req) => {
  const styles = await Deno.readFile("style.css");
  return new Response(styles, {
    headers: {
      "content-type": "text/css",
    },
  });
};

const handleError = (req) => {
  return new Response("NOT FOUND!", {
    status: 404,
    statusText: "not found buddy",
    headers: {},
  });
};

const specificHandler = () => ({
  "/dholakpur": handleDholakpur,
  "/styles.css": handleStyles,
  "/greet": handleGreet,
  "/portfolio": handlePortfolio,
});

const handler = (request) => {
  const url = new URL(request.url);
  request._url = url;
  console.log(request._url);

  if (specificHandler()[url.pathname])
    return specificHandler()[url.pathname](request);

  return handleError(request);
};

const startServer = () => {
  Deno.serve({ port: 9000 }, handler);
};

startServer();
