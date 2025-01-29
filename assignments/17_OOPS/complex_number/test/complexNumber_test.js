import { describe, it } from "jsr:@std/testing/bdd";
import { assert, assertEquals, assertFalse } from "jsr:@std/assert";
import { ComplexNumber } from "../src/complexNumber.js";

describe("class ComplexNumber", () => {
  describe("instance", () => {
    it("should be the instance of the class", () => {
      const c1 = new ComplexNumber(2, 3);
      assert(c1 instanceof ComplexNumber);
    });

    it("should not be the instance of the class", () => {
      const c1 = new ComplexNumber(2, 3);
      const c2 = new String();
      assertFalse(c2 instanceof ComplexNumber);
      assertFalse(c1 instanceof String);
      assertFalse("c3" instanceof ComplexNumber);
    });
  });

  describe("visualizeComplexNum()", () => {
    it("should return in complex number format", () => {
      assertEquals(new ComplexNumber(2, 3).visualizeComplexNum(), "2 + 3i");
      assertEquals(new ComplexNumber(4, 5).visualizeComplexNum(), "4 + 5i");
    });
  });
});
