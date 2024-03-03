<template>
  <footer>
    <Container>{{ new Date().getFullYear() }}</Container>
  </footer>
</template>

<script setup lang="ts">
import { Container } from "@/components";
</script>
