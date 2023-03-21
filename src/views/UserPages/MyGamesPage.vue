<template>
  <div class="my-games">
    <ListComponent data-cy="list-my-games" :items="myGames">
      <template #item="{ item: myGame }">
        <ListItem :open-game="myGame" title="Моя игра" />
      </template>
    </ListComponent>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { onMounted } from "vue";
import { getUserGames } from "@/api/controlLobbyServices/controlLobbyService";
import ListComponent from "@/components/UI/ListComponent.vue";
import ListItem from "@/components/UI/ListItem.vue";

const myGames = ref<any>([]);

const fetchMyGames = async () => {
  try {
    const response = await getUserGames();
    myGames.value = response.data;
  } catch (e) {}
};

onMounted(async () => {
  await fetchMyGames();
});
</script>

<style scoped></style>
