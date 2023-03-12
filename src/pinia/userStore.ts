import {defineStore} from "pinia";
import {Undefinable} from "@/types";
import {ref} from "@vue/runtime-core";

export const useUserStore = defineStore('user', () => {
    const token = ref<Undefinable<string>>(undefined);
    const role = ref<Undefinable<string>>(undefined);
    const username = ref<Undefinable<string>>(undefined);

    // const setUserState = (token: string, role: string, username: string) => {
    //     token.value = token;
    //     role.value = role;
    //     username.value = username;
    // }

    return {
        token,
        role,
        username,
        // setUserState,
    }
})