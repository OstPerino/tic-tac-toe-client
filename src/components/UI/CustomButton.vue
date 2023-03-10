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
  buttonType: {
    type: String,
    required: false,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'tertiary'].includes(value),
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
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: darken($primary-color, 5%);
    color: $white;
  }

  &.secondary {
    color: $primary-color;
    background-color: transparent;
    border: 1px solid $primary-color;
  }

  &.tertiary {
    color: $primary-color;
    background-color: transparent;
    border: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
