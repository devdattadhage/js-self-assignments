class ResponseBuilder {
  constructor() {
    this.status = 200;
    this.headers = new Headers();
    this.body = null;
  }

  withStatus(status) {
    this.status = status;
    return this;
  }

  withContent(content) {
    this.body = content;
    return this;
  }

  withContentType(contentType = "text/plain") {
    this.headers.set("Content-Type", contentType);
    return this;
  }

  withHeader(key, value) {
    this.headers.append(key, value);
    return this;
  }

  withJsonContent(jsonObject) {
    this.body = JSON.stringify(jsonObject);
    this.withContentType("application/json");
    return this;
  }

  withCookie(name, value, options = {}) {
    let cookieString = `${name}=${value}`;

    if (options.expires)
      cookieString += `; Expires=${options.expires.toUTCString()}`;
    if (options.maxAge) cookieString += `; Max-Age=${options.maxAge}`;
    if (options.domain) cookieString += `; Domain=${options.domain}`;
    if (options.path) cookieString += `; Path=${options.path}`;
    if (options.secure) cookieString += `; Secure`;
    if (options.httpOnly) cookieString += `; HttpOnly`;
    if (options.sameSite) cookieString += `; SameSite=${options.sameSite}`;

    this.headers.append("Set-Cookie", cookieString);
    return this;
  }

  build() {
    return new Response(this.body, {
      status: this.status,
      headers: this.headers,
    });
  }
}

const response = new ResponseBuilder()
  .withStatus(200)
  .withContent("Hello, world!")
  .withContentType("text/html")
  .withHeader("X-Custom-Header", "MyValue")
  .withCookie("sessionId", "abc123", {
    httpOnly: true,
    secure: true,
    path: "/",
  })
  .withCookie("theme", "dark", { maxAge: 3600 }) // 1-hour expiry
  .build();

// console.log(response.headers.get("Set-Cookie"));
console.log(await response.text());
