const greetings = [];

const reqLogger = (req) => {
  console.log(`${req.method} | ${req._url.pathname}`);
};

const handleSecretGreeting = async (req) => {
  const fd = await req.formData();
  const res = {
    firstname: fd.get("firstname"),
    quote: fd.get("quote"),
  };
  greetings.push(res);

  console.log(greetings);
  return new Response("redirect", {
    status: 303,
    headers: {
      "content-type": "text/html",
      location: "/greet.html",
    },
  });
};

const handleGreet = async (req) => {
  const body = await Deno.readFile(`.${req._url.pathname}`);

  return new Response(body, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const handler = (request) => {
  const url = new URL(request.url);
  request._url = url;
  reqLogger(request);

  if (url.pathname === "/greet.html") {
    return handleGreet(request);
  }

  if (url.pathname === "/secretgreeting") {
    return handleSecretGreeting(request);
  }

  return new Response("<h1>NOT FOUND</h1>", {
    status: 404,
    headers: {
      "content-type": "text/html",
    },
  });
};

const startServe = () => {
  Deno.serve({ port: 8000 }, handler);
};

startServe();
