<template>
  <div class="main-page">
    <ListComponent :items="openGames">
      <template #item="{ item: openGame }">
        <ListItem :open-game="openGame" title="Открытая игра" />
      </template>
    </ListComponent>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { ref } from "@vue/runtime-core";
import { Undefinable } from "@/types";

import TicTacToeComponent from "@/components/tic-tac-toe/TicTacToeComponent.vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";
import ListComponent from "@/components/UI/ListComponent.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import {
  createLobby,
  getOpenGames,
} from "@/api/controlLobbyServices/controlLobbyService";
import ListItem from "@/components/UI/ListItem.vue";
import { OpenGame } from "@/api/controlLobbyServices/types";

const errorMessage = ref<Undefinable<string>>(undefined);
const openGames = ref<Undefinable<OpenGame[]>>([]);

// const createGameLobby = async () => {
//   try {
//     const response = await createLobby();
//     console.log(response);
//   } catch (e) {
//     console.log(e);
//   }
// };

const fetchOpenGames = async () => {
  try {
    const response = await getOpenGames();
    openGames.value = response.data;
    // console.log(response);
  } catch (e) {
    console.log(e);
  }
};

onMounted(async () => {
  await fetchOpenGames();
});
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";
</style>
