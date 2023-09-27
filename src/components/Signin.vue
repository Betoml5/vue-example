
<script >
import { ref } from "vue";
import { useStore, mapActions } from "vuex"
import router from "../routes";

export default {
    setup() {
        const store = useStore();
        const email = ref("");
        const password = ref("");

        const handleSubmit = async () => {

            const success = await store.dispatch("login", {
                email: email.value,
                password: password.value
            });
            console.log(success);
            if (success) {
                router.push({ path: "/dashboard" });
                console.log("Successfully Logged In");
            }
        };
        return {
            handleSubmit,
            email,
            password
        }

    },


}

</script>


<template>
    <div className="p-6 ">
        <form @submit.prevent="handleSubmit" className="flex flex-col mt-4 justify-center">
            <input type="text" placeholder="Numero de control" className="p-2 rounded-md" v-model="email" />
            <input type="password" placeholder="Contraseña" className="p-2 rounded-md mt-4" minlength="8"
                v-model="password" />

            <button className="mt-4 bg-secondary p-4 text-white font-poppins font-bold rounded-lg hover:bg-opacity-80">
                Iniciar Sesion
            </button>

        </form>

        <p className="font-poppins mt-4 text-white">
            ¿Tienes algun problema con la plataforma?
            <span className="underline">Reportalo</span>
        </p>
    </div>
</template>

