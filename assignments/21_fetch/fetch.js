const myRequest = new Request(
  "https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch"
);

fetch(myRequest).then((response) => {
  (async () => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const [stream1, stream2] = response.body.tee();
    stream1.pipeTo(Deno.stdout.writable);
    const file = await Deno.open("index.html", { write: true });
    stream2.pipeTo(file.writable);
  })();
  // return response.blob();
});
// .then((response) => {
//   console.log(response);
// });
