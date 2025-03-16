// const file = await Deno.open("./transformStream.js", { read: true });
// file.readable
//   .pipeThrough(new CompressionStream("gzip"))
//   .pipeTo((await Deno.create("compressed.gz")).writable);

const file2 = await Deno.open("./autumn.jpg", { read: true });
// file2.readable.pipeTo(Deno.stdout.writable);
file2.readable
  .pipeThrough(new CompressionStream("gzip"))
  .pipeTo((await Deno.create("compressedWithDeflate.gz")).writable);
