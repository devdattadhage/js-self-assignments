// const file = await Deno.create("./output/output.txt"); // Creates a writable file
// const writableStream = file.writable;
// console.log(writableStream.locked);
// const writer = writableStream.getWriter();
// // await writer.write(new TextEncoder().encode("Hello, Streams!"));
// await writer.write(
//   new Uint8Array([
//     72, 101, 108, 108, 111, 44, 32, 83, 116, 114, 101, 97, 109, 115, 33,
//   ])
// );

// await writer.close();

// console.log(writableStream.locked);

const file = await Deno.create("./output/output.txt", {
  write: true,
  append: true,
});
const writer = file.writable.getWriter();
await writer.write(new TextEncoder().encode("Hello, Streams!"));
await writer.write(new TextEncoder().encode("\nHello, Beams!!"));
