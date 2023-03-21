<template>
  <div class="registration-page">
    <SubmitForm>
      <template #header>
        <CustomText :font-weight="700" :font-size="'32px'">
          Регистрация
        </CustomText>
      </template>
      <template #inputs>
        <CustomInput
          data-cy="form-input-username"
          :label-value="'Имя пользователя'"
          v-model="registrationState.username"
          @update:model-value="registrationState.username = $event"
        />
        <CustomInput
          data-cy="form-input-email"
          :label-value="'Email'"
          v-model="registrationState.email"
          @update:model-value="registrationState.email = $event"
        />
        <CustomInput
          data-cy="form-input-password"
          :label-value="'Пароль'"
          v-model="registrationState.password"
          @update:model-value="registrationState.password = $event"
          :is-password="'password'"
        />
      </template>
      <template #error>
        <CustomText :font-size="'12px'">
          {{ errorMessage }}
        </CustomText>
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
        <CustomButton data-cy="form-btn-register" :disabled="false" @click="submitRegistration">
          Зарегестрироваться
        </CustomButton>
      </template>
    </SubmitForm>
  </div>
</template>

<script setup lang="ts">
// TODO: Подумать как передавать цвета пропсом по scss
import { reactive } from "vue";
import { ref, Ref } from "@vue/runtime-core";
import { AxiosError } from "axios";
import { RegistrationData } from "@/api/userServices/types";
import { registration } from "@/api/userServices/userService";
import { useRouter } from "vue-router";

import SubmitForm from "@/components/UI/SubmitForm.vue";
import CustomText from "@/components/UI/CustomText.vue";
import CustomInput from "@/components/UI/CustomInput.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import { Undefinable } from "@/types";

const router = useRouter();
const errorMessage = ref<Undefinable<string>>(undefined);

const registrationState = reactive({
  username: "",
  email: "",
  password: "",
});

const handlerError = (e: AxiosError) => {
  switch (e?.response?.status) {
    case 400:
      errorMessage.value = "Пользователь с таким именем или email уже зарегестрирован";
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
    await router.push({ path: "/auth" });
  } catch (e: any) {
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
