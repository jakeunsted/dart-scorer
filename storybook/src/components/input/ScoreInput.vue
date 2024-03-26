<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <NumberButton
          v-for="num in [1, 2, 3]"
          :key="num"
          :value="num"
          @click="handleNumberClick(num)"
          class="mr-1"
        />
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <NumberButton
          v-for="num in [4, 5, 6]"
          :key="num"
          :value="num"
          @click="handleNumberClick(num)"
          class="mr-1"
        />
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <NumberButton 
          v-for="num in [7, 8, 9]"
          :key="num"
          :value="num"
          @click="handleNumberClick(num)"
          class="mr-1"
        />
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn @click="handleBackspaceClick" class="mr-1">
          <v-icon icon="mdi-backspace-outline"></v-icon>
        </v-btn>
        <NumberButton :value="0" @click="handleNumberClick(num)" class="mr-1" />
        <v-btn @click="handleSubmitClick">
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
  if ((inputValue.value + num).length <= 3 && parseInt(inputValue.value + num) <= 180) {
    inputValue.value += num;
    console.log('Number:', inputValue.value);
  } else {
    console.log('Maximum input value (180) exceeded!');
  }
};

/**
 * Handles the click event for the backspace button.
 * If the input value is not empty, it removes the last character from the input value.
 * @returns {void}
 */
const handleBackspaceClick = () => {
  if (inputValue.value.length > 0) {
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
