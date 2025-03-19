import _ from "npm:lodash";

const listener = Deno.listen({ port: 8000 });
let connections = [];

async function handleRequest(conn, buffer, clientId, decoder, encoder) {
  while (true) {
    const byteCount = await conn.read(buffer);

    if (byteCount === null) {
      console.log(
        `Client ${clientId} disconnected. Available Connections ${
          connections.length - 1
        }`
      );
      connections = _.without(connections, conn);
      break;
    }

    const message = decoder.decode(buffer.slice(0, byteCount)).trim();
    console.log(`Client Id (${clientId}) : ${message}`);
    await conn.write(encoder.encode(`Request Received: ${message}\n`));
  }
}

async function handleConnection(conn, clientId) {
  const buffer = new Uint8Array(1024);
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  try {
    await handleRequest(conn, buffer, clientId, decoder, encoder);
  } catch (e) {
    console.error(`Error with client ${clientId}:`, e);
  } finally {
    conn.close();
  }
}

const main = async () => {
  let connectionId = 0;

  while (true) {
    const conn = await listener.accept();
    connectionId += 1;
    connections.push(conn);
    console.log(
      `Client ${connectionId} connected. Total Connections:`,
      connections.length
    );

    handleConnection(conn, connectionId);
  }
};

main();
