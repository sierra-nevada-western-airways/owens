<template>
  <HeaderLayout />
  <main>
    <RouterView />
  </main>
  <FooterLayout />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterLayout from "./features/layout/footer/FooterLayout.vue";
import HeaderLayout from "./features/layout/header/HeaderLayout.vue";
</script>
