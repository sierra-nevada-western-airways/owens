<template>
  <label :for="inputId">
    label
    <input
      :id="inputId"
      type="text"
      :value="state"
      @input="handleUpdateInput"
    />
  </label>
</template>

<script setup lang="ts">
import useId from "../use-id/UseId";
import useState from "./UseState";

const inputId = useId();
const [state, setState] = useState<string>("defaultValue");

const handleUpdateInput = (event: Event): void => {
  setState((event.target as HTMLInputElement).value);
};
</script>
