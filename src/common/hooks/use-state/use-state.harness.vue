<template>
  <input type="number" :value="state" />
  <button @click="setState(++state)">Increase</button>
</template>

<script setup lang="ts">
import { useState } from "../../index";

const [state, setState] = useState<number>(0);
</script>
