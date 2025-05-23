import { defineConfig } from "auth-astro";
import Google from "@auth/core/providers/google";
import GitHub from "@auth/core/providers/github";

export default defineConfig({
    providers: [
        Google({    
            clientId: import.meta.env.GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHub({
            clientId: import.meta.env.GITHUB_CLIENT_ID,
            clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/login", // Página de login personalizada si usas una
    },
});
// https://authjs.dev/reference/core/configuration
