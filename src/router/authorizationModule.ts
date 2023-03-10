import AuthorizationPage from "@/views/PublicPages/AuthorizationPage.vue";
import RegistrationPage from "@/views/PublicPages/RegistrationPage.vue";

export default [
    {
        name: "Authorization",
        component: AuthorizationPage,
        path: "/auth",
    },
    {
        name: "Registration",
        component: RegistrationPage,
        path: "/registration"
    }
]