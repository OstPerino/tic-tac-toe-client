<template>
  <div class="game-page">
    <TicTacToeComponent />
    <ChooseXorO />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

import TicTacToeComponent from "@/components/tic-tac-toe/TicTacToeComponent.vue";
import ChooseXorO from "@/components/tic-tac-toe/ChooseXorO.vue";

const route = useRoute();
const router = useRouter();


</script>

<style scoped>
.game-page {
  padding: 50px;
}
</style>
