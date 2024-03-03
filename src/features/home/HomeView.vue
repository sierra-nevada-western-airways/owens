<template>
  <p>Home!</p>
  <p>Current count: {{ counter.count }}</p>
  <button @click="counter.increment()">Increase</button>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/Counter";

const counter = useCounterStore();
</script>
