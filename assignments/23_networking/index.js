import _ from "npm:lodash";
const listener = Deno.listen({ port: 8000 });
let connections = [];

async function handleConnection(conn, clientId) {
  try {
    const buffer = new Uint8Array(1024);
    const byteCount = await conn.read(buffer);
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    const message = decoder.decode(buffer.slice(0, byteCount));

    console.log(`Client Id (${clientId}) : ${message}`);

    await conn.write(encoder.encode(`Message Sent:${message}`));
  } catch (e) {
    connections = _.without(connections, conn);
    console.log("Disconnected. Available Connection", connections.length);
  }
}

const main = async () => {
  let connectionId = 0;
  setInterval(async () => {
    for await (const conn of connections) {
      try {
        handleConnection(conn, connectionId);
      } catch (e) {
        console.error(e);
      }
    }
  }, 200);

  while (true) {
    const conn = await listener.accept();
    connectionId += 1;
    connections.push(conn);
    console.log("Connected. Available Connection", connections.length);
  }
};

main();
