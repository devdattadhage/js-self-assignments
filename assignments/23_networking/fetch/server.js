const startServer = (port = 8000, handler) => {
  Deno.serve(port, handler);
};

const postHandler = async (request) => {
  const formData = await request.formData();
  for (const e of formData) {
    console.log("Element : ", e);
  }

  return new Response("", {
    status: 201,
  });
};

const handler = (request) => {
  console.log(request);
  const url = new URL(request.url);
  if (request.method === "POST" && url.pathname === "/path") {
    return postHandler(request);
  }

  return new Response(JSON.stringify({ name: "abc", age: 12 }), {
    headers: { "content-type": "application/json" },
  });
};

startServer(8000, handler);
