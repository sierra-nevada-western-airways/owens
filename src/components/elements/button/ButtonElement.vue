<template>
  <button type="button" class="btn btn-primary">{{ properties.text }}</button>
</template>

<script setup lang="ts">
export interface ButtonElementProperties {
  /**
   * The text value of the button element.
   */
  text: string;
}

const properties = defineProps<ButtonElementProperties>();
</script>
