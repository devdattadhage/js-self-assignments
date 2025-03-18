import { describe, it } from "testing/bdd";
import { assertFalse, assert, assertEquals } from "assert";
import { grade, isEven, add } from "../src/demo.js";
import { someFn } from "../src/demo2.js";

describe("isEven()", () => {
  it("should return false when num is odd", () => {
    assertFalse(isEven(3));
  });

  it("should return true when num is even", () => {
    assert(isEven(2));
  });
});

describe("add()", () => {
  it("should add two number", () => {
    assertEquals(add(1, 2), 3);
  });
});

describe("add()", () => {
  it("should return true", () => {
    assert(someFn());
  });
});

describe("grade()", () => {
  it("should return FAIL", () => {
    assertEquals(grade(20), "FAIL");
  });
  it("should return FAIL", () => {
    assertEquals(grade(100), "A++");
  });
  it("should return FAIL", () => {
    assertEquals(grade(95), "A");
  });
  it("should return FAIL", () => {
    assertEquals(grade(84), "B");
  });
  it("should return FAIL", () => {
    assertEquals(grade(66), "C");
  });
  it("should return FAIL", () => {
    assertEquals(grade(37), "D");
  });
});
