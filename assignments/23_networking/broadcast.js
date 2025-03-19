import _ from "npm:lodash";
const listener = Deno.listen({ port: 8000 });
let connections = [];

async function broadcastTime() {
  const time = new Date().toLocaleTimeString();
  const encoder = new TextEncoder();
  // console.log(time);
  for await (const conn of connections) {
    try {
      await conn.write(encoder.encode(time + "\n"));
    } catch (e) {
      connections = _.without(connections, conn);
      console.log("Disconnected. Available Connection", connections.length);
    }
  }
}

const main = async () => {
  setInterval(broadcastTime, 1000);

  while (true) {
    const conn = await listener.accept();
    connections.push(conn);
    console.log("Connected. Available Connection", connections.length);
  }
};

main();
