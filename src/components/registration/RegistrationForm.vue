<template>
  <form class="registration-form" @click.prevent>
    <CustomInput
      :label-value="'User Name'"
      v-model="registrationState.username"
      @update:model-value="registrationState.username = $event"
    />
    <CustomInput
      :label-value="'Email'"
      v-model="registrationState.email"
      @update:model-value="registrationState.email = $event"
    />
    <CustomInput
      :label-value="'Password'"
      v-model="registrationState.password"
      @update:model-value="registrationState.password = $event"
      :is-password="'password'"
    />
    <CustomButton :disabled="false" @click="submitRegistration">
      Зарегестрироваться
    </CustomButton>
  </form>
</template>

<script setup lang="ts">
import CustomInput from "@/components/UI/CustomInput.vue";
import { reactive } from "vue";
import CustomButton from "@/components/UI/CustomButton.vue";

const registrationState = reactive({
  username: "",
  email: "",
  password: "",
});

const submitRegistration = () => {
  console.log(111)
}
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";

.registration-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 400px;
  margin: auto;
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 4px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
}
</style>
