let count = 0;
const file = await Deno.open("./images/autumn.jpg");
const transform = new TransformStream({
  transform(chunk, controller) {
    const newChunk = new Uint8Array(chunk);
    if (count > 1) {
      for (let i = 2; i < newChunk.length; i++) {
        // newChunk[i] = 255 - newChunk[i];
        newChunk[i] = Math.floor(Math.random() * 255);
      }
    }
    count++;

    controller.enqueue(newChunk);
  },
});

file.readable
  .pipeThrough(transform)
  .pipeTo((await Deno.create("./images/autumn1.jpg")).writable);
