const encoder = new TextEncoder();
const decoder = new TextDecoder();

// Define a TransformStream that converts text to uppercase
const transformStream = new TransformStream({
  transform(chunk, controller) {
    const text = decoder.decode(chunk); // Decode bytes to string
    controller.enqueue(encoder.encode(text.toUpperCase())); // Convert & enqueue
  },
});

// Create a readable stream from a file
const inputFile = await Deno.open("output.txt", { read: true });
const readableStream = inputFile.readable;

// Create a writable stream for output
const outputFile = await Deno.create("output1.txt");
const writableStream = outputFile.writable;

// Pipe through the transform stream
await readableStream.pipeThrough(transformStream).pipeTo(writableStream);

console.log("Transformation completed!");
