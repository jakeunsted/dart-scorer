<template>
  <v-btn class="mlr-small">{{ value }}</v-btn>
</template>

<script setup>
const props = defineProps({
  value: Number,
});
</script>