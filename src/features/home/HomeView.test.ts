import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import HomeView from "./HomeView.vue";
import { createPinia, setActivePinia } from "pinia";

describe("homeView", () => {
  it("renders", () => {
    setActivePinia(createPinia());

    render(HomeView);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
