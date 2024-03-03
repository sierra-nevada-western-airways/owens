<template>
  <p>State: {{ state }}</p>
  <button @click="dispatcher(0)">Zero</button>
  <button @click="dispatcher(1)">One</button>
  <button @click="dispatcher(5)">Other</button>
</template>

<script setup lang="ts">
import { ValueDefaults } from "@/utilities";
import useReducer from "./UseReducer";

const reducer = (state: number, action: number): number => {
  switch (action) {
    case 0: {
      return 0;
    }
    case 1: {
      return 1;
    }
    default: {
      ++state;
    }
  }

  return state;
};

const [state, dispatcher] = useReducer(reducer, ValueDefaults.Number);
</script>
