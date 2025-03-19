const listener = Deno.listen({ port: 8000 });
let  connectionId = 0;

for await (const connection of listener) {
  handleConnection(connection, connectionId++);
}

function handleConnection(connection, clientId) {
  setInterval(async () => {
    const buffer = new Uint8Array(1024);
    const byteCount = await connection.read(buffer);
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    const message = decoder.decode(buffer.slice(0, byteCount));

    console.log(`Client Id (${clientId}) : ${message}`);

    await connection.write(encoder.encode(`Message Received:${message}`));
  }, 200);
}
