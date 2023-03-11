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
      <template #button>
        <CustomButton :disabled="false" @click="submitAuthorization">
          Зарегестрироваться
        </CustomButton>
      </template>
    </SubmitForm>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { AxiosError } from "axios";
import { Undefinable } from "@/types";
import { ref } from "@vue/runtime-core";
import { authorization } from "@/api/userServices/userService";

import SubmitForm from "@/components/UI/SubmitForm.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import CustomText from "@/components/UI/CustomText.vue";
import CustomInput from "@/components/UI/CustomInput.vue";

const errorMessage = ref<Undefinable<string>>(undefined);

const authorizationState = reactive({
  username: "",
  password: "",
});

const errorHandler = (e: AxiosError) => {
  errorMessage.value = e?.message;
};

const submitAuthorization = async () => {
  try {
    const response = await authorization(authorizationState);
    console.log(response);
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
