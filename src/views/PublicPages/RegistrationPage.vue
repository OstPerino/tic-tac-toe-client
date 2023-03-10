<template>
  <div class="registration-page">
    Registration
    <button @click="registrationRequest">Registration</button>
  </div>
</template>

<script setup lang="ts">
import {registration} from "@/api/userServices/userService";
import {RegistrationData} from "@/api/userServices/types";
import {AxiosError} from "axios";
import {reactive} from "vue";

const errors: Array<AxiosError> = reactive([])

const registrationRequest = async () => {
  try {
    const registrationData: RegistrationData = {
      email: "nikita@gmail.com",
      password: "password",
      username: "Nikita"
    }
    const response = await registration(registrationData);
  } catch (e: any) {
    errors.push(e);
  }
}
</script>

<style scoped>

</style>