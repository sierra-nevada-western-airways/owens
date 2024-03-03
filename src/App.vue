<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
