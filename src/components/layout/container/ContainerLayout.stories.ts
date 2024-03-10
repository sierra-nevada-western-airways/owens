import type { Meta, StoryObj } from "@storybook/vue3";
import ContainerLayout from "./ContainerLayout.vue";

const meta: Meta<typeof ContainerLayout> = {
  tags: ["autodocs"],
  component: ContainerLayout,
};

export default meta;

export const Primary: StoryObj<typeof ContainerLayout> = {
  args: {
    default: "Container!",
  },
};
