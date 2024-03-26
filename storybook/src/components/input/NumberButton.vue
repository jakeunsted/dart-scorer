<template>
  <v-btn>{{ value }}</v-btn>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
}
</script>
