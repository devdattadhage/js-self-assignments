const file = await Deno.open("zip.js");
const stream = file.readable;

// Split the stream into two branches
const [branch1, branch2] = stream.tee();

// Pipe branch1 to one file
branch1.pipeTo(
  await Deno.create("./output/copy1.txt").then((f) => {
    console.log("hello1");
    return f.writable;
  })
);

// Pipe branch2 to another file
branch2.pipeTo(
  await Deno.create("./output/copy2.txt").then((f) => {
    console.log("hello2");
    return f.writable;
  })
);
