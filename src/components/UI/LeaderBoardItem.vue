<template>
  <div class="leaderboard-item">
    {{ props.leaderBoard?.username }}
    {{ props.leaderBoard['games-won'] }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  leaderBoard: {
    type: Object,
    required: true,
  }
})
</script>

<style scoped lang="scss">

</style>