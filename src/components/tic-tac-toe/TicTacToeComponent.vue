<template>
  <div class="tic-tac-toe-component">
    <!--  Second version  -->
    <div v-for="(row, rowIndex) in cells.board" :key="rowIndex" class="row">
      <div
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        class="cell"
        @click="handleCellClicked(rowIndex, cellIndex)"
      >
        {{ drawCellContent(cell) }}
      </div>
    </div>
    <div class="text-container">
      <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
      <span class="winner" v-if="winnerName">Winner is {{ winnerName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, onUnmounted, reactive, watch } from "vue";

import { makeMove } from "@/api/gameServices/gameService";
import { Nullable, Undefinable } from "@/types";

const router = useRouter();
const route = useRoute();
const store = useStore();

const cells = reactive({ board: [] });
const currentSign = ref<Nullable<boolean | null>>(null);
const errorMessage = ref<string>("");
const intervalId = ref<any>(null);
const winnerName = ref<string>("");

const initBoardState = async () => {
  const result = await store.dispatch("gameStore/fetchGameState", {
    id: route.params.id,
  });

  setSign(result);
  setCells(result);
  checkForWinner(result);

  if (result.state !== 200) {
    console.log(result);
  }
};

const handleCellClicked = async (row: number, col: number) => {
  if (cells.board[row][col] === null && !winnerName.value) {
    try {
      const response = await makeMove({
        gameId: route.params.id,
        cellName: generateCellForRequest(row, col),
        sign: currentSign.value,
      });
      cells.board[row][col] = currentSign.value;
      console.log(response);
    } catch (e) {
      errorMessage.value = e?.response?.data?.reason;
      console.log(e);
    }
  }
};

const checkForWinner = (result: any) => {
 if (result.game_winner_id) {
   winnerName.value = result.game_winner_id;
 }
}

const setSign = (result: any) => {
  currentSign.value = result.o_player_id !== result.current_player_id;
};

const generateCellForRequest = (row: number, col: number) => {
  switch (`${row}${col}`) {
    case "00":
      return "cell-1";
    case "01":
      return "cell-2";
    case "02":
      return "cell-3";

    case "10":
      return "cell-4";
    case "11":
      return "cell-5";
    case "12":
      return "cell-6";

    case "20":
      return "cell-7";
    case "21":
      return "cell-8";
    case "22":
      return "cell-9";
  }
};

const setCells = (payload: any) => {
  const topRow = [payload?.cell_1, payload?.cell_2, payload?.cell_3];
  const midRow = [payload?.cell_4, payload?.cell_5, payload?.cell_6];
  const bottomRow = [payload?.cell_7, payload?.cell_8, payload?.cell_9];
  cells.board = [topRow, midRow, bottomRow];
};

const drawCellContent = computed(() => (cell: any) => {
  if (cell === true) {
    return "X";
  } else if (cell === false) {
    return "O";
  }

  return "";
});

watch(winnerName, (value) => {
  clearInterval(intervalId.value);
});

onMounted(async () => {
  await initBoardState();
  if (!store.state["gameStore/gameState"]?.is_ended) {
    intervalId.value = setInterval(async () => {
      await initBoardState();
    }, 2000);
  } else {
    clearInterval(intervalId.value);
  }
});

onUnmounted(async () => {
  clearInterval(intervalId.value);
});
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

.text-container {
  display: flex;
  flex-direction: column;
}
</style>
