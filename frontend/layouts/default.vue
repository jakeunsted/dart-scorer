<template>
  <v-app-bar class="grey darken-4" :elevation="0">
    <!-- <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->

    <v-app-bar-title>Dart Scorer</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-plus-box-outline"></v-btn>
      <v-btn icon="mdi-account"></v-btn>
    </template>
  </v-app-bar>
  <nuxt-page />
</template>

<script>

</script>