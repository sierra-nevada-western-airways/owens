<template>
  <header>
    <nav>
      <RouterLink :to="homeRoute">Home</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { homeRoute } from "./features/home/HomeView.routes";
</script>
