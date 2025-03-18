// const file = await Deno.open("./transformStream.js", { read: true });
// file.readable
//   .pipeThrough(new CompressionStream("gzip"))
//   .pipeTo((await Deno.create("./zips/compressed.gz")).writable);

// const file2 = await Deno.open("./images/autumn.jpg", { read: true });
// // file2.readable.pipeTo(Deno.stdout.writable);
// file2.readable
//   .pipeThrough(new CompressionStream("deflate"))
//   .pipeTo((await Deno.create("./zips/compressedWithDeflate.gz")).writable);

const file3 = await Deno.open("./zips/compressedWithDeflate.gz", {
  read: true,
});
file3.readable
  .pipeThrough(new DecompressionStream("deflate"))
  .pipeTo((await Deno.create("./images/decompressedImg.jpg")).writable);
