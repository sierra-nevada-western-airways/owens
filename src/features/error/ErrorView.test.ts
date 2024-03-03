import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import ErrorView from "./ErrorView.vue";

describe("errorView", () => {
  it("renders", () => {
    render(ErrorView);

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
