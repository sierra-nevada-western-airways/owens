import { render, screen } from "@testing-library/vue";
import { userEvent } from "@testing-library/user-event";
import UseStateHarness from "./use-state.harness.vue";

describe("use state", () => {
  test("has default value", () => {
    render(UseStateHarness);

    expect(screen.getByRole("spinbutton")).toHaveValue(0);
  });

  test("set value works correctly", async () => {
    const user = userEvent.setup();

    render(UseStateHarness);

    await user.click(screen.getByRole("button"));

    expect(await screen.findByRole("spinbutton")).toHaveValue(1);
  });
});
