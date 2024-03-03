import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import ButtonElement, {
  type ButtonElementProperties,
} from "./ButtonElement.vue";
import renderOptionsWrapper from "@/utilities/test-helpers/RenderOptionsWrapper";

describe("buttonElement", () => {
  it("renders", () => {
    const props: ButtonElementProperties = {
      text: "myButton",
    };

    render(ButtonElement, renderOptionsWrapper(props));

    expect(
      screen.getByRole("button", { name: props.text }),
    ).toBeInTheDocument();
  });
});
