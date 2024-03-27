<template>
  <v-container align="center">
    <v-card :title=username align="left" class="w-75">
      <template v-slot:subtitle>
        <div>3 Dart Avg: {{ average }}</div>
        <div>Last Score: {{ lastScore }}</div>
      </template>
      <template v-slot:append>
        <h1>{{ remainingScore }}</h1>
      </template>
    </v-card>
  </v-container>
</template>

<script setup>
const props = defineProps({
  username: String,
  average: Number,
  lastScore: Number,
  remainingScore: Number,
});
</script>