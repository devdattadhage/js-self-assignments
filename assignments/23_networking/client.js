const conn = await Deno.connect({ port: 8000 });

while (true) {
  const msg = prompt();
  if (msg === "exit") break;
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  console.log(msg);
  await conn.write(encoder.encode(msg));

  const buffer = new Uint8Array(1024);
  const byteCount = await conn.read(buffer);

  const message = decoder.decode(buffer.slice(0, byteCount));

  console.log(message);
}
