import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import UseReducerTestBed from "./UseReducerTestBed.vue";

describe("useReducer", () => {
  it("reducer returns default state", () => {
    render(UseReducerTestBed);

    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

  it("reducer respects dispatcher", async () => {
    expect.assertions(1);

    const user = userEvent.setup();

    render(UseReducerTestBed);

    const element = await screen.findByRole("button", { name: /one/i });

    await user.click(element);

    await expect(screen.findByText(/1/i)).resolves.toBeInTheDocument();
  });
});
