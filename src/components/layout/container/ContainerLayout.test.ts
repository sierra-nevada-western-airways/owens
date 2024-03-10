import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import ContainerLayout from "./ContainerLayout.vue";
import slotWrapper from "@/utilities/test-helpers/SlotWrapper";

describe("containerLayout", () => {
  it("renders correctly", () => {
    render(ContainerLayout, slotWrapper("container"));

    expect(screen.getByText(/container/i)).toBeInTheDocument();
  });
});
