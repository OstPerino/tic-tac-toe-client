<template>
  <div class="main-page">
    <ListComponent :items="openGames">
      <template #item="{ item: openGame }">
        <ListItem
          :open-game="openGame"
          title="Открытая игра"
          @get:open-game="openTheGame"
        />
      </template>
    </ListComponent>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "@vue/runtime-core";
import { Undefinable } from "@/types";

import TicTacToeComponent from "@/components/tic-tac-toe/TicTacToeComponent.vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";
import ListComponent from "@/components/UI/ListComponent.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import {
  createLobby,
  getOpenGames, joinLobby,
} from "@/api/controlLobbyServices/controlLobbyService";
import ListItem from "@/components/UI/ListItem.vue";
import { OpenGame } from "@/api/controlLobbyServices/types";

const errorMessage = ref<Undefinable<string>>(undefined);
const openGames = ref<Undefinable<OpenGame[]>>([]);
const store = useStore();
const router = useRouter();

const fetchOpenGames = async () => {
  try {
    const response = await getOpenGames();
    openGames.value = response.data;
  } catch (e) {
    console.log(e);
  }
};

const openTheGame = async (openGame) => {
  try {
    store.commit("gameStore/setGameState", { ...openGame });
    const response = await joinLobby(openGame.id);
    await router.push({ path: `/game/${openGame.id}` });
  } catch (e) {
    if (e.response.status === 400) {
      store.commit("gameStore/setGameState", { ...openGame });
      await router.push({ path: `/game/${openGame.id}` });
    }
  }
};

onMounted(async () => {
  await fetchOpenGames();
});
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";
</style>
