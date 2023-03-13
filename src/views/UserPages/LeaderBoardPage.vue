<template>
  <div class="leaderboard-page"></div>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { Undefinable } from "@/types";
import { getLeaderboard } from "@/api/controlLobbyServices/controlLobbyService";
import {onMounted} from "vue";

const errorMessage = ref<Undefinable<string>>(undefined);

const fetchLeaderboard = async () => {
  try {
    const response = await getLeaderboard();
    console.log(response);
  } catch (e: any) {
    errorMessage.value = e.response.message;
  }
};

onMounted(async () => {
  await fetchLeaderboard();
})
</script>

<style scoped></style>
