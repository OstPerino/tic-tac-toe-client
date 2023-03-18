<template>
  <div class="tic-tac-toe-component">
    <!--  Second version  -->
    <div v-for="(row, rowIndex) in cells" :key="rowIndex" class="row">
      <div
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        class="cell"
        @click="handleCellClicked(rowIndex, cellIndex)"
      >
        {{ drawCellContent(cell) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getGameById } from "@/api/controlLobbyServices/controlLobbyService";
import { Undefinable } from "@/types";
import { log } from "util";

const router = useRouter();
const route = useRoute();
const store = useStore();

const cells = ref<Array<Array<boolean>>>([]);

const initBoardState = async () => {
  const result = await store.dispatch("gameStore/fetchGameState", {
    id: route.params.id,
  });

  setCells(result.value);

  if (result.state !== 200) {
    console.log(result);
  }
};

const handleCellClicked = (row: number, col: number) => {
  if (cells[row][col] === "") {
    console.log(111)
  }
};

const setCells = (payload: any) => {
  const topRow = [payload?.cell_1, payload?.cell_2, payload?.cell_3];
  const midRow = [payload?.cell_4, payload?.cell_5, payload?.cell_6];
  const bottomRow = [payload?.cell_7, payload?.cell_8, payload?.cell_9];
  cells.value = [topRow, midRow, bottomRow];
};

const drawCellContent = computed(() => (cell: any) => {
  if (cell === true) {
    return "X";
  } else if (cell === false) {
    return "O";
  }

  return "";
});

onMounted(async () => {
  await initBoardState();
});

// import { ref } from "@vue/runtime-core";
// import { useStore } from "vuex";
// import { onMounted, reactive } from "vue";
// import { useRoute, useRouter } from "vue-router";
// import { Undefinable } from "@/types";
// import { getGameById } from "@/api/controlLobbyServices/controlLobbyService";
//
// const router = useRouter();
// const route = useRoute();
// const store = useStore();
//
// const board = reactive<Array<Array<Undefinable<string>>>>([
//   ["", "", ""],
//   ["", "", ""],
//   ["", "", ""],
// ]);
//
// const gameOver = ref<boolean>(false);
// const winner = ref<Undefinable<string>>(undefined);
// const selectedSign = ref<Undefinable<string>>("X");
//
// onMounted(() => {
//   initGame();
// });
//
// const setCells = (response) => {
//   board[0][0] = response.cell_1 !== null ? response.cell_1 : "";
//   board[0][1] = response.cell_2 !== null ? response.cell_2 : "";
//   board[0][2] = response.cell_3 !== null ? response.cell_3 : "";
//
//   board[1][0] = response.cell_4 !== null ? response.cell_4 : "";
//   board[1][1] = response.cell_5 !== null ? response.cell_5 : "";
//   board[1][2] = response.cell_6 !== null ? response.cell_6 : "";
//
//   board[2][0] = response.cell_7 !== null ? response.cell_7 : "";
//   board[2][1] = response.cell_8 !== null ? response.cell_8 : "";
//   board[2][2] = response.cell_9 !== null ? response.cell_9 : "";
// }
//
// // const setSign = (response) {
// //   selectSign.value =
// // }
//
// const generateCellToRequest = (row: number, col: number) => {
//   switch (`${row}${col}`) {
//     case "00":
//       return 'cell_1';
//     case "01":
//       return 'cell_2';
//     case "02":
//       return 'cell_3';
//
//     case "10":
//       return 'cell_4';
//     case "11":
//       return 'cell_5';
//     case "12":
//       return 'cell_6';
//
//     case "20":
//       return 'cell_7';
//     case "21":
//       return 'cell_8';
//     case "22":
//       return 'cell_9';
//   }
// }
//
// const initGame = async () => {
//   const currentGameId = route.params.id;
//
//   try {
//     const response = await getGameById(currentGameId);
//     // const getSign = await
//     store.commit('gameStore/setGameState', { ...response.data })
//     console.log(response);
//   } catch (e) {
//     console.log(e);
//   }
// };
//
// const cellClicked = (row: number, col: number) => {
//   if (!gameOver.value && board[row][col] === "") {
//     board[row][col] = selectedSign.value;
//     checkForWinner();
//     // selectedSign.value = selectedSign.value === "X" ? "O" : "X";
//   }
// };
//
// const checkForWinner = () => {
//   // Check rows
//   for (let row = 0; row < 3; row++) {
//     if (
//       board[row][0] === board[row][1] &&
//       board[row][1] === board[row][2] &&
//       board[row][0] !== ""
//     ) {
//       gameOver.value = true;
//       winner.value = board[row][0];
//       return;
//     }
//   }
//
//   // Check columns
//   for (let col = 0; col < 3; col++) {
//     if (
//       board[0][col] === board[1][col] &&
//       board[1][col] === board[2][col] &&
//       board[0][col] !== ""
//     ) {
//       gameOver.value = true;
//       winner.value = board[0][col];
//       return;
//     }
//   }
//
//   // Check diagonals
//   if (
//     board[0][0] === board[1][1] &&
//     board[1][1] === board[2][2] &&
//     board[0][0] !== ""
//   ) {
//     gameOver.value = true;
//     winner.value = board[0][0];
//     return;
//   }
//
//   if (
//     board[0][2] === board[1][1] &&
//     board[1][1] === board[2][0] &&
//     board[0][2] !== ""
//   ) {
//     gameOver.value = true;
//     winner.value = board[0][2];
//     return;
//   }
//
//   // Check for draw
//   let isDraw = true;
//   for (let row = 0; row < 3; row++) {
//     for (let col = 0; col < 3; col++) {
//       if (board[row][col] === "") {
//         isDraw = false;
//         break;
//       }
//     }
//     if (!isDraw) break;
//   }
//
//   if (isDraw) {
//     gameOver.value = true;
//     winner.value = "Draw";
//     return;
//   }
// };
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
