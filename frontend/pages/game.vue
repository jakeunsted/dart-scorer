<template>
  <v-container>
    <ScoreInput />
  </v-container>
</template>

<script>
import { ref } from 'vue';
import ScoreInput from '../../storybook/src/components/input/ScoreInput.vue';
import NumberButton from '../../storybook/src/components/input/NumberButton.vue';

export default {
  components: {
    ScoreInput,
    NumberButton,
  },
};
</script>