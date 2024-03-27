<template>
  <v-container>
    <!-- Card to show input -->
    <v-row align="center" justify="center" no-gutters>
      <v-card class="width-200 height-50 mb-small justify-center">
        <template v-slot:title>
          <div align="center">{{ inputValue }}</div>
        </template>
      </v-card>
    </v-row>

    <!-- Number Input Pad -->
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="auto" class="mtb-small">
        <NumberButton
          v-for="num in [1, 2, 3]"
          :key="num"
          :value="num"
          @click="handleNumberClick(num)"
        />
      </v-col>
    </v-row>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="auto" class="mtb-small">
        <NumberButton
          v-for="num in [4, 5, 6]"
          :key="num"
          :value="num"
          @click="handleNumberClick(num)"
        />
      </v-col>
    </v-row>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="auto" class="mtb-small">
        <NumberButton 
          v-for="num in [7, 8, 9]"
          :key="num"
          :value="num"
          @click="handleNumberClick(num)"
        />
      </v-col>
    </v-row>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="auto" class="mtb-small">
        <v-btn @click="handleBackspaceClick" class="mlr-small">
          <v-icon icon="mdi-backspace-outline"></v-icon>
        </v-btn>
        <NumberButton :value="0" @click="handleNumberClick(0)" />
        <v-btn @click="handleSubmitClick" class="mlr-small">
          <v-icon icon="mdi-arrow-left-bottom"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('');

/**
 * Handles the click event for a number button.
 * 
 * @param {number} num - The number to be added to the input value.
 */
const handleNumberClick = (num) => {
  const newValue = inputValue.value.toString() + num;
  
  if (parseInt(newValue) > 180 || newValue.length > 3) {
    console.log('Invalid input:', newValue);
    return;
  }

  // Remove leading zero if present (except when inputValue is '0')
  if (newValue.length > 1 && newValue.startsWith('0')) {
    inputValue.value = newValue.slice(1);
  } else {
    inputValue.value = newValue;
  }

  console.log('Number:', inputValue.value);
};



/**
 * Handles the click event for the backspace button.
 * If the input value is not empty, it removes the last character from the input value.
 * @returns {void}
 */
const handleBackspaceClick = () => {
  if (inputValue.value.length !== 0) {
    inputValue.value = inputValue.value.slice(0, -1);
    console.log('Backspace:', inputValue.value);
  }
};

/**
 * Handles the click event when the submit button is clicked.
 * Logs the value of the input and clears the input field.
 */
const handleSubmitClick = () => {
  console.log('Submit:', inputValue.value);
  inputValue.value = '';
};
</script>
