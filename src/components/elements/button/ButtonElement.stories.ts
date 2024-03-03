import type { Meta, StoryObj } from "@storybook/vue3";
import ButtonElement from "./ButtonElement.vue";

const meta: Meta<typeof ButtonElement> = {
  component: ButtonElement,
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof ButtonElement> = {
  args: {
    text: "Primary",
  },
};
