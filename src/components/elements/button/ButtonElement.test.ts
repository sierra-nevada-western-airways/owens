import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import ButtonElement, {
  type ButtonElementProperties,
} from "./ButtonElement.vue";
import renderOptionsWrapper from "@/utilities/test-helpers/RenderOptionsWrapper";

describe("buttonElement", () => {
  it("renders", () => {
    const properties: ButtonElementProperties = {
      text: "Button",
    };

    render(ButtonElement, renderOptionsWrapper(properties));

    expect(screen.getByRole("button", { name: /button/i })).toBeInTheDocument();
  });
});
