<template>
  <div class="registration-page">
    <RegistrationForm />
    <!--    Registration-->
    <!--    <button @click="registrationRequest">Registration</button>-->
  </div>
</template>

<script setup lang="ts">
import { registration } from "@/api/userServices/userService";
import { RegistrationData } from "@/api/userServices/types";
import { AxiosError } from "axios";
import { reactive } from "vue";
import RegistrationForm from "@/components/registration/RegistrationForm.vue";

const errors: Array<AxiosError> = reactive([]);

const registrationRequest = async () => {
  try {
    const registrationData: RegistrationData = {
      email: "nikita@gmail.com",
      password: "password",
      username: "Nikita",
    };
    const response = await registration(registrationData);
  } catch (e: any) {
    errors.push(e);
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
