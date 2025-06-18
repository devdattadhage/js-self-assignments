import _ from "npm:lodash";

const listener = Deno.listen({ port: 8000 });
let connections = [];

async function handleRequest(client) {
  const buffer = new Uint8Array(1024);
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  while (true) {
    const n = await client.conn.read(buffer);

    if (n === null) {
      console.log(
        `Client ${client.clientId} disconnected. Available Connections ${
          connections.length - 1
        }`
      );
      connections = _.without(connections, client.conn);
      break;
    }

    const msgInfo = JSON.parse(decoder.decode(buffer.slice(0, n)).trim());
    for (const c of connections) {
      if (c.clientId === msgInfo.to) {
        console.log(c.clientId, msgInfo.to);

        await c.write(encoder.encode(`${msgInfo.from}: ${msgInfo.message}\n`));
      }
    }
  }
}

async function handleConnection(client) {
  try {
    await handleRequest(client);
  } catch (e) {
    console.error(`Error with client ${client.clientId}:`, e);
  } finally {
    client.conn.close();
  }
}

const main = async () => {
  let clientId = 0;

  while (true) {
    const conn = await listener.accept();
    clientId += 1;
    connections.push({ clientId, conn });
    console.log(
      `Client ${clientId} connected. Total Connections:`,
      connections.length
    );

    handleConnection({ clientId, conn });
  }
};

main();
