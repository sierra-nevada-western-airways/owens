import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    render(HelloWorld);

    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});
