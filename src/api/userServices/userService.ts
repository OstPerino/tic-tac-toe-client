import $api from "@/api";

import { RegistrationData } from "@/api/userServices/types";

export async function registration(registrationData: RegistrationData) {
    return $api.post('/auth/register', registrationData)
}