import { describe, it, expect } from "vitest";
import useId from "./UseId";

describe("useId", () => {
  it("has a value in range", () => {
    const result = Number.parseFloat(useId());

    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(1);
  });
});
