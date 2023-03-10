<template>
  <button
    class="custom-button"
    @click="onClickHandler"
    :disabled="props.disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"]);

const props = defineProps({
  disabled: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const onClickHandler = () => {
  emit("click");
};
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";

.custom-button {
  font-family: 'Roboto Mono', monospace;
}
</style>
