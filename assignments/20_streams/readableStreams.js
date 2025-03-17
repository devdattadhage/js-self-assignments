const file = await Deno.open("readableStreams.js", { read: true });
const readableStream = file.readable;

console.log(readableStream.locked);
// console.log(await readableStream.getReader().read());
console.log(readableStream.locked);

// Read the stream chunk by chunk
for await (const chunk of readableStream) {
  console.log(new TextDecoder().decode(chunk)); // Convert bytes to text
}

console.log(readableStream.locked);