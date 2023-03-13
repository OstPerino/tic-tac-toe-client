<template>
  <div class="main-page">
    <CustomButton :disabled="false" @click="createGameLobby">
      Новое лобби
    </CustomButton>
    <!--    <ListComponent items="">-->
    <!--      <template #item>-->
    <!--        -->
    <!--      </template>-->
    <!--    </ListComponent>-->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "@vue/runtime-core";
import { Undefinable } from "@/types";

import TicTacToeComponent from "@/components/tic-tac-toe/TicTacToeComponent.vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";
import ListComponent from "@/components/UI/ListComponent.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import {
  createLobby,
  getLeaderboard,
} from "@/api/controlLobbyServices/controlLobbyService";

const errorMessage = ref<Undefinable<string>>(undefined);

// const createGameLobby = async () => {
//   try {
//     const response = await createLobby();
//     console.log(response);
//   } catch (e) {
//     console.log(e);
//   }
// };

// onMounted(async () => {
//   await fetchLeaderboard();
// });
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";
</style>
