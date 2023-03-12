<template>
  <div class="custom-input-container">
    <input
      class="custom-input"
      @input="onInputHandler"
      :value="modelValue"
      :placeholder="labelValue"
      :class="{ 'has-value': modelValue }"
      :type="isPassword"
    />
    <label class="custom-input-label" :class="{ active: modelValue }">
      {{ props.labelValue }}
    </label>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  labelValue: {
    type: String,
    required: true,
    default: () => "",
  },
  isPassword: {
    type: String,
    required: false,
    default: "text",
  },
});

const onInputHandler = (event: any) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", event.target.value);
};
</script>

<style lang="scss" scoped>
@import "@/styles/_base.scss";

.custom-input-container {
  position: relative;
  width: 100%;

  input {
    font-family: "Roboto Mono", monospace;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    padding: 8px 12px;
    width: 100%;
    outline: none;

    &:focus {
      border-color: #6d9bf1;
    }

    &::placeholder {
      color: transparent;
      transform: translateY(-100%);
    }

    &:not(:placeholder-shown) + label {
      top: -18px;
      font-size: 12px;
      color: #6d9bf1;
    }
  }

  label {
    position: absolute;
    top: 12px;
    left: 12px;
    font-size: 16px;
    color: #999;
    transition: all 0.2s ease;
    pointer-events: none;

    &.active {
      top: -18px;
      font-size: 12px;
      color: #6d9bf1;
    }
  }
}
</style>
