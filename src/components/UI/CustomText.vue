<template>
  <p
    class="custom-text"
    :style="{ fontWeight: props.fontWeight, fontSize: props.fontSize }"
  >
    {{ props.text }}
  </p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: "",
  },
  fontWeight: {
    type: Number,
    required: false,
    default: 400,
  },
  fontSize: {
    type: String,
    required: false,
    default: "16px",
  },
  color: {
    type: String,
    default: 'var(--primary-color, #6d9bf1)',
  }
});
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";

.custom-text {
  font-family: "Roboto Mono", monospace;
  color: var(--text-color, #333);
  line-height: 1.5;
}
</style>
