import type { Ref } from "vue";
import useState from "../use-state/UseState";

export default function useReducer<T, K>(
  reducer: (currentState: T, action: K) => T,
  initialState: T,
): [state: Ref<T>, dispatcher: (action: K) => void] {
  const [state, updateState] = useState<T>(initialState);

  const dispatcher = (action: K): void => {
    updateState(reducer(state.value, action));
  };

  return [state, dispatcher];
}
