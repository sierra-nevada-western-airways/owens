<template>
  <footer>
    <ContainerLayout>{{ new Date().getFullYear() }}</ContainerLayout>
  </footer>
</template>

<script setup lang="ts">
import { ContainerLayout } from "@/components";
</script>
