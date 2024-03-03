import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type ICounter from "./ICounter";
import { ValueDefaults } from "@/utilities/value-defaults/ValueDefaults";

export const useCounterStore = defineStore("counter", (): ICounter => {
  const count = ref<number>(ValueDefaults.Number);

  const doubleCount = computed<number>(() => count.value * 2);

  const increment = (): void => {
    count.value++;
  };

  return { count, doubleCount, increment };
});
