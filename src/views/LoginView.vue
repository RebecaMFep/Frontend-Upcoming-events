<script setup>
import LoginForm from "./../components/login/LoginForm.vue";

</script>

<template>
    <h1>Iniciar sesión</h1>
    <div id="login-box">  
        <LoginForm />
    </div>
</template>

<style lang="scss" scoped>
main {
    background-color: white;
    height: 90%;
    justify-content: center;
}
#login-box{
    margin-top: 5%;
    margin-left: 15%;
    justify-self: center;
}
h1 {
    margin-top: 10%;
    justify-self: center;
    color: blue;
    text-align: center;
    font-size: large;
}
</style >


