import { createHandler } from "./app.js";

const startServe = () => {
  const routes = {
    GET: [
      {
        pattern: new URLPattern({ pathname: "/greet" }),
        handler: retrieveTodos,
      },
    ],
    POST: [
      {
        pattern: new URLPattern({ pathname: "/login" }),
        handler: addTodo,
      },
    ],
  };

  Deno.serve({ port: 8000 }, createHandler(routes));
};

startServe();
