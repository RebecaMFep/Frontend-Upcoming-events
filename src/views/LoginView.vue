<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import router from "@/router";

const username = ref('')
const password = ref('')
const store = useAuthStore()

const login = () => {

    const dataConnection = {
        username: username.value,
        password: password.value
    }

    store.login(dataConnection)

    if (store.user.isAuthenticated) {
        const redirectPath = '/dashboard'
        router.push(redirectPath)
    }

}

</script>

<template>
    <div>
        <form>
            <input type="text" name="input_username" id="input_username" v-model="username" placeholder="username">
            <input type="password" name="input_password" id="input_password" v-model="password" placeholder="password">
            <button type="submit" @click.prevent="login">Login</button>
        </form>
    </div>
</template>

<style lang="scss"></style>