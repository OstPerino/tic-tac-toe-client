import $api from "@/api";

import { AuthorizationData, RegistrationData } from "@/api/userServices/types";

export async function registration(registrationData: RegistrationData) {
  return $api.post("/auth/register", registrationData);
}

export async function authorization(authorizationData: AuthorizationData) {
  return $api.post("/auth/login", authorizationData);
}

export async function getUserId() {
  return $api.get('/auth/get-id')
}
