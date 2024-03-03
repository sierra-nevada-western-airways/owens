import { expect, describe, it } from "vitest";
import { ValueDefaults } from "./ValueDefaults";

describe("valueDefaults", () => {
  it("number has correct value", () => {
    expect(ValueDefaults.Number).toBe(0);
  });

  it("string has correct value", () => {
    expect(ValueDefaults.String).toBe("");
  });

  it("boolean has correct value", () => {
    expect(ValueDefaults.Boolean).toBeFalse();
  });

  it("date as correct value", () => {
    const date = new Date();

    expect(ValueDefaults.Date.getMonth()).toStrictEqual(date.getMonth());
    expect(ValueDefaults.Date.getFullYear()).toStrictEqual(date.getFullYear());
    expect(ValueDefaults.Date.getDay()).toStrictEqual(date.getDay());
  });

  it("array has correct value", () => {
    expect(ValueDefaults.Array<number>()).toBeArrayOfSize(0);
  });
});
