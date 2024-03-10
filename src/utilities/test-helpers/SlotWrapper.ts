import type { RenderOptions } from "@testing-library/vue";

export default function slotWrapper(data: string): RenderOptions {
  return {
    slots: {
      default: `<div>${data}</div>`,
    },
  };
}
