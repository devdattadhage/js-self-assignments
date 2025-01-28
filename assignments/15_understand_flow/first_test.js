import {
  describe,
  it,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
} from "jsr:@std/testing/bdd";

const push = (msg) => {
  if (!console.our_test) console.our_test = [];

  console.our_test.push(msg);
  const out = console.our_test
    .map((x, i) => console.log(`## ${i} - ${x}`))
    .join("");
  console.log(`\n---${out}---\n`);
  prompt("");
};

describe("group 1", () => {
  beforeAll(() => {
    push(`before group 1`);
  });

  afterAll(() => {
    push(`after group 1`);
  });

  beforeEach(() => {
    push(`before test`);
  });

  afterEach(() => {
    push(`leaving test`);
  });

  it("test 1", () => {
    push(`inside test 1`);
  });

  it("test 2", () => {
    push(`inside test 2`);
  });
});

describe("group 2", () => {
  beforeAll(() => {
    push(`before group 2`);
  });

  afterAll(() => {
    push(`after group 2`);
  });

  beforeEach(() => {
    push(`before test`);
  });

  afterEach(() => {
    push(`leaving test`);
  });

  it("test 11", () => {
    push(`inside test 11`);
  });

  it("test 22", () => {
    push(`inside test 22`);
  });
});
