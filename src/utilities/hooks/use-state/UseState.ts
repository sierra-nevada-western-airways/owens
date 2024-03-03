import { ref, type Ref } from "vue";

export default function useState<T>(
  initialValue: T,
): [Ref<T>, (newState: T) => void] {
  const state = ref<T>(initialValue) as Ref<T>;

  const updateState = (newState: T): void => {
    state.value = newState;
  };

  return [state, updateState];
}
