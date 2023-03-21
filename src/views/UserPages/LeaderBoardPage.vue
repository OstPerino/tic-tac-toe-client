<template>
  <div class="leaderboard-page">
    <ListComponent :items="leaderBoards">
      <template #item="{ item: leaderBoard }">
        <LeaderBoardItem :leader-board="leaderBoard" title="Моя игра" />
      </template>
    </ListComponent>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { Undefinable } from "@/types";
import { getLeaderboard } from "@/api/controlLobbyServices/controlLobbyService";
import {onMounted} from "vue";
import ListComponent from "@/components/UI/ListComponent.vue";
import LeaderBoardItem from "@/components/UI/LeaderBoardItem.vue";

const errorMessage = ref<Undefinable<string>>(undefined);
const leaderBoards = ref([]);

const fetchLeaderboard = async () => {
  try {
    const response = await getLeaderboard();
    leaderBoards.value = response.data;
    // leaderBoards.value.sort((a, b) => a > b)
    // console.log(response);
  } catch (e: any) {
    errorMessage.value = e.response.message;
  }
};

onMounted(async () => {
  await fetchLeaderboard();
})
</script>

<style scoped></style>
