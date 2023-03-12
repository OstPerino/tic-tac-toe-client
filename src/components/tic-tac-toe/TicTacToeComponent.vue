<template>
  <div class="tic-tac-toe-component">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
      <div
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        class="cell"
        @click="cellClicked(rowIndex, cellIndex)"
      >
        {{ cell }}
      </div>
    </div>
    <div v-if="gameOver" class="game-over">{{ winner }} wins!</div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { ref } from "@vue/runtime-core";
import { Undefinable } from "@/types";

const board = reactive<Array<Array<Undefinable<string>>>>([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);
const gameOver = ref<boolean>(false);
const winner = ref<Undefinable<string>>(undefined);
const selectedSign = ref<Undefinable<string>>("X");

const cellClicked = (row: number, col: number) => {
  if (!gameOver.value && board[row][col] === "") {
    board[row][col] = selectedSign.value;
    checkForWinner();
    selectedSign.value = selectedSign.value === "X" ? "O" : "X";
  }
};

const checkForWinner = () => {
  // Check rows
  for (let row = 0; row < 3; row++) {
    if (
        board[row][0] === board[row][1] &&
        board[row][1] === board[row][2] &&
        board[row][0] !== ""
    ) {
      gameOver.value = true;
      winner.value = board[row][0];
      return;
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    if (
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col] &&
        board[0][col] !== ""
    ) {
      gameOver.value = true;
      winner.value = board[0][col];
      return;
    }
  }

  // Check diagonals
  if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== ""
  ) {
    gameOver.value = true;
    winner.value = board[0][0];
    return;
  }

  if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== ""
  ) {
    gameOver.value = true;
    winner.value = board[0][2];
    return;
  }

  // Check for draw
  let isDraw = true;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === "") {
        isDraw = false;
        break;
      }
    }
    if (!isDraw) break;
  }

  if (isDraw) {
    gameOver.value = true;
    winner.value = "Draw";
    return;
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";

.row {
  display: flex;
}

.cell {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
}

.game-over {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
}
</style>