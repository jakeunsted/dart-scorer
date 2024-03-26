<template>
<!-- Dart board has 23 potential numbers -->
<!-- Also have buttons for double and treble -->
<!-- 25 can only be single and double -->
<!-- 0 cannot be double or treble -->
<v-container>
  <v-row align="center" justify="center" class="mb-1">
    <v-cols cols="auto">
      <NumberButton
        v-for="num in [1, 2, 3, 4]"
        :key="num"
        :value="num"
        @click="handleNumberClick(num)"
        class="mr-1"
      />
    </v-cols>
  </v-row>
  <v-row align="center" justify="center" class="mb-1">
    <v-cols cols="auto">
      <NumberButton
        v-for="num in [5, 6, 7, 8]"
        :key="num"
        :value="num"
        @click="handleNumberClick(num)"
        class="mr-1"
      />
    </v-cols>
  </v-row>
  <v-row align="center" justify="center" class="mb-1">
    <v-cols cols="auto">
      <NumberButton
        v-for="num in [9, 10, 11, 12]"
        :key="num"
        :value="num"
        @click="handleNumberClick(num)"
        class="mr-1"
      />
    </v-cols>
  </v-row>
  <v-row align="center" justify="center" class="mb-1">
    <v-cols cols="auto">
      <NumberButton
        v-for="num in [13, 14, 15, 16]"
        :key="num"
        :value="num"
        @click="handleNumberClick(num)"
        class="mr-1"
      />
    </v-cols>
  </v-row>
  <v-row align="center" justify="center" class="mb-1">
    <v-cols cols="auto">
      <NumberButton
        v-for="num in [17, 18, 19, 20]"
        :key="num"
        :value="num"
        @click="handleNumberClick(num)"
        class="mr-1"
      />
    </v-cols>
  </v-row>
  <v-row align="center" justify="center" class="mb-1">
    <v-cols cols="auto">
      <NumberButton
        v-for="num in [25, 0]"
        :key="num"
        :value="num"
        @click="handleNumberClick(num)"
        class="mr-1"
      />
    </v-cols>
  </v-row>
  <v-row align="center" justify="center">
    <v-cols cols="auto">
      <v-btn
        @click="toggleDouble"
        class="mr-1"
        :color="double ? 'primary' : ''"
      >Double</v-btn>
      <v-btn
        @click="toggleTreble"
        class="mr-1"
        :color="treble ? 'primary' : ''"
      >Treble</v-btn>
      <v-btn @click="handleUndoClick" class="mr-1">Undo</v-btn>
    </v-cols>
  </v-row>
</v-container>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import NumberButton from './NumberButton.vue';

const inputArray = ref([]);
const double = ref(false);
const treble = ref(false);

/**
 * Initializes the inputArray with an empty array when the component is mounted.
 */
onMounted(() => {
  inputArray.value = [];
});

/**
 * Toggles the value of `double` and updates the value of `treble` accordingly.
 */
const toggleDouble = () => {
  double.value = !double.value;
  if (double.value) {
    treble.value = false;
  }
};

/**
 * Toggles the treble value.
 * If the treble value is true, it sets the double value to false.
 */
const toggleTreble = () => {
  treble.value = !treble.value;
  if (treble.value) {
    double.value = false;
  }
};

/**
 * Handles the click event for a number button.
 * 
 * @param {number} num - The number clicked.
 */
const handleNumberClick = (num) => {
  if (double.value) num *= 2;
  if (treble.value) num *= 3;

  if (inputArray.value.length < 3) {
    inputArray.value.push(num);
    if (inputArray.value.length === 3) {
      const sum = inputArray.value.reduce((acc, curr) => acc + curr, 0);
      console.log('Submit:', inputArray.value, 'Sum:', sum);
      // Need to send/post value here.
      inputArray.value = [];
    }
  }

  // Reset double and treble
  double.value = false;
  treble.value = false;
};

/**
 * Handles the click event for the undo button.
 * Removes the last item from the inputArray if it is not empty.
 * Logs the updated inputArray after the removal.
 */
const handleUndoClick = () => {
  if (inputArray.value.length > 0) {
    inputArray.value.pop();
    console.log('Undo:', inputArray.value);
  }
};
</script>