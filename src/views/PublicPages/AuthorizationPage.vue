<template>
  <div class="authorization-page">
    <SubmitForm>
      <template #header>
        <CustomText :font-weight="700" :font-size="'32px'">
          Авторизация
        </CustomText>
      </template>
      <template #inputs>
        <CustomInput
          :label-value="'Имя пользователя'"
          v-model="authorizationState.username"
          @update:model-value="authorizationState.username = $event"
        />
        <CustomInput
          :label-value="'Пароль'"
          v-model="authorizationState.password"
          @update:model-value="authorizationState.password = $event"
          :is-password="'password'"
        />
      </template>
      <template #error>
        <CustomText :font-size="'12px'">
          {{ errorMessage }}
        </CustomText>
      </template>
      <template #links>
        <CustomText>
          Нет аккаунта?
          <router-link to="/registration" class="router-link">
            Зарегестрировать
          </router-link>
        </CustomText>
      </template>
      <template #button>
        <CustomButton :disabled="false" @click="submitAuthorization">
          Войти
        </CustomButton>
      </template>
    </SubmitForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { AxiosError } from "axios";
import { authorization } from "@/api/userServices/userService";
import { Undefinable } from "@/types";

import SubmitForm from "@/components/UI/SubmitForm.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import CustomText from "@/components/UI/CustomText.vue";
import CustomInput from "@/components/UI/CustomInput.vue";

const router = useRouter();
const errorMessage = ref<Undefinable<string>>(undefined);

const authorizationState = reactive({
  username: "",
  password: "",
});

const errorHandler = (e: AxiosError) => {
  switch (e?.response?.status) {
    case 403:
      errorMessage.value = "Возможно неверный логин или пароль";
      break;
    default:
      break;
  }
};

const submitAuthorization = async () => {
  try {
    const response = await authorization(authorizationState);
    localStorage.setItem("token", `${response?.data?.token}`);
    await router.push("/main");
  } catch (e: any) {
    errorHandler(e);
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";

.authorization-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
