<script setup>
import LoginForm from "./../components/login/LoginForm.vue";

axios
    .get("localhost:8080/api/v1/")
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })

</script>

<template>
    <div>
        <h1>Iniciar sesión</h1>
        <LoginForm />
    </div>
</template>

<style lang="scss" scoped>
main {
    background-color: white;
    height: 90%;
}

h1 {
    color: blue;
    text-align: center;
    font-size: large;
}
</style >


