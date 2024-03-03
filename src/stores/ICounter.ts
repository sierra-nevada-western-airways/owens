import type { ComputedRef, Ref } from "vue";

export default interface ICounter {
  count: Ref<number>;
  doubleCount: ComputedRef<number>;
  increment: () => void;
}
