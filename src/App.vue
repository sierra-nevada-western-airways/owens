<template>
  <HeaderLayout />
  <main>
    <RouterView />
  </main>
  <FooterLayout />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { FooterLayout, HeaderLayout } from "./features/layout";
</script>
