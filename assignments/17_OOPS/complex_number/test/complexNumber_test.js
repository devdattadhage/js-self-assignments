import { describe, it } from "jsr:@std/testing/bdd";
import {
  assertEquals,
  assertInstanceOf,
  assertNotInstanceOf,
} from "jsr:@std/assert";
import { ComplexNumber } from "../src/complexNumber.js";

describe("class ComplexNumber", () => {
  describe("instance", () => {
    it("should be the instance of the class", () => {
      const c1 = new ComplexNumber(2, 3);
      assertInstanceOf(c1, ComplexNumber);
    });

    it("should not be the instance of the class", () => {
      const c1 = new ComplexNumber(2, 3);
      const c2 = new String();
      assertNotInstanceOf(c2, ComplexNumber);
      assertNotInstanceOf(c1, String);
      assertNotInstanceOf("c3", ComplexNumber);
    });
  });

  describe("visualize()", () => {
    it("should return in complex number format", () => {
      assertEquals(new ComplexNumber(2, 3).visualize(), "2 + 3i");
    });
  });

  describe("add()", () => {
    it("should add two complex number", () => {
      const c1 = new ComplexNumber(2, 3);
      const c2 = new ComplexNumber(4, 5);
      assertEquals(c1.add(c2).visualize(), "6 + 8i");
    });

    it("should add two complex number when the numbers are negative", () => {
      const c1 = new ComplexNumber(-2, 6);
      const c2 = new ComplexNumber(4, -3);
      assertEquals(c1.add(c2).visualize(), "2 + 3i");
    });
  });

  describe("sub()", () => {
    it("should sub two complex number", () => {
      const c1 = new ComplexNumber(2, 3);
      const c2 = new ComplexNumber(4, 1);
      assertEquals(c1.sub(c2).visualize(), "-2 + 2i");
    });

    it("should sub two complex number when the numbers are negative", () => {
      const c1 = new ComplexNumber(-2, 6);
      const c2 = new ComplexNumber(4, -3);
      assertEquals(c1.sub(c2).visualize(), "-6 + 9i");
    });
  });

  describe("addMultiple()", () => {
    it("should return the same when only single complex number is given", () => {
      const c1 = new ComplexNumber(2, 3);
      assertEquals(c1.addMultiple().visualize(), "2 + 3i");
    });

    it("should add two complex number", () => {
      const c1 = new ComplexNumber(2, 3);
      const c2 = new ComplexNumber(4, 5);
      assertEquals(c1.addMultiple(c2).visualize(), "6 + 8i");
    });

    it("should add multiple complex number", () => {
      const c1 = new ComplexNumber(2, 3);
      const c2 = new ComplexNumber(4, 5);
      const c3 = new ComplexNumber(6, 7);
      assertEquals(c1.addMultiple(c2, c3).visualize(), "12 + 15i");
    });

    it("should add multiple complex number when the numbers are negative", () => {
      const c1 = new ComplexNumber(-2, 3);
      const c2 = new ComplexNumber(4, -5);
      const c3 = new ComplexNumber(-6, 7);
      assertEquals(c1.addMultiple(c2, c3).visualize(), "-4 + 5i");
    });
  });

  describe("subMultiple()", () => {
    it("should return the same when only single complex number is given", () => {
      const c1 = new ComplexNumber(2, 3);
      assertEquals(c1.subMultiple().visualize(), "2 + 3i");
    });

    it("should sub two complex number", () => {
      const c1 = new ComplexNumber(2, 3);
      const c2 = new ComplexNumber(4, 5);
      assertEquals(c1.subMultiple(c2).visualize(), "-2 + -2i");
    });

    it("should sub multiple complex number", () => {
      const c1 = new ComplexNumber(2, 3);
      const c2 = new ComplexNumber(4, 5);
      const c3 = new ComplexNumber(6, 7);
      assertEquals(c1.subMultiple(c2, c3).visualize(), "-8 + -9i");
    });

    it("should sub multiple complex number when the numbers are negative", () => {
      const c1 = new ComplexNumber(-2, 3);
      const c2 = new ComplexNumber(4, -5);
      const c3 = new ComplexNumber(-7, 6);
      assertEquals(c1.subMultiple(c2, c3).visualize(), "1 + 2i");
    });
  });
});
