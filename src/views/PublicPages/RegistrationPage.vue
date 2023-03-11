<template>
  <div class="registration-page">
    <SubmitForm>
      <template #header>
        <CustomText text="Регистрация" :font-weight="700" :font-size="'32px'" />
      </template>
      <template #inputs>
        <CustomInput
          :label-value="'Имя пользователя'"
          v-model="registrationState.username"
          @update:model-value="registrationState.username = $event"
        />
        <CustomInput
          :label-value="'Email'"
          v-model="registrationState.email"
          @update:model-value="registrationState.email = $event"
        />
        <CustomInput
          :label-value="'Пароль'"
          v-model="registrationState.password"
          @update:model-value="registrationState.password = $event"
          :is-password="'password'"
        />
      </template>
      <template #error>
        <CustomText :text="errorMessage" :font-size="'12px'" />
      </template>
      <template #links>
        <span>
          Уже зарегестрированы? Попробуйте
          <router-link to="/auth" class="router-link">
            авторизироваться
          </router-link>
        </span>
      </template>
      <template #button>
        <CustomButton :disabled="false" @click="submitRegistration">
          Зарегестрироваться
        </CustomButton>
      </template>
    </SubmitForm>
  </div>
</template>

<script setup lang="ts">
// TODO: Подумать как передавать цвета пропсом по scss
import { reactive } from "vue";
import { ref } from "@vue/runtime-core";
import { AxiosError } from "axios";
import { RegistrationData } from "@/api/userServices/types";
import { registration } from "@/api/userServices/userService";

import SubmitForm from "@/components/UI/SubmitForm.vue";
import CustomText from "@/components/UI/CustomText.vue";
import CustomInput from "@/components/UI/CustomInput.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import { Undefinable } from "@/types";

let errorMessage: Undefinable<string> = ref(undefined);

const registrationState = reactive({
  username: "",
  email: "",
  password: "",
});

const handlerError = (e: AxiosError) => {
  console.log(e.response.status);
  switch (e.response.status) {
    case 400:
      console.log(e.response.status);
      errorMessage.value =
        "Пользователь с таким именем или email уже зарегестрирован";
      console.log(errorMessage);
      break;
    default:
      break;
  }
};

const submitRegistration = async () => {
  try {
    const response = await registration({
      email: registrationState.email,
      username: registrationState.username,
      password: registrationState.password,
    });
    console.log(response);
  } catch (e) {
    handlerError(e);
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";

.registration-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
