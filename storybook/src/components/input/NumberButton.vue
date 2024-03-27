<template>
  <v-btn>{{ value }}</v-btn>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  value: Number,
});
</script>