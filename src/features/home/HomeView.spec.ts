import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import HomeView from "./HomeView.vue";

describe("HomeView", () => {
  it("Renders", () => {
    render(HomeView);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
