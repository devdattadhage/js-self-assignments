const postOptions = {
  method: "POST",
  headers: { "content-type": "text/plain" },
  body: "hello",
};

const response = await fetch(
  "http://localhost:8000/new_location.html",
  postOptions
);
console.log(await response.text());
