<script setup>
import LoginForm from "./../components/login/LoginForm.vue";
</script>

<template>
    <main>
    <h1>Iniciar sesión</h1>
    <div id="login-box">  
        <LoginForm />
        
    </div>
</main>
</template>

<style lang="scss" scoped>
main {
    background-image: url(../../public/image/fondo4.jpg);
    background-size: cover;
    background-position:left;
    opacity: 0.9;
}
#login-box{
    margin-top: 5%;
    margin-left: 12%;
    justify-self: center;
    margin-bottom: 10%;
}
h1 {
    margin-top: 2%;
    justify-self: center;
    color: blue;
    text-align: center;
    font-size: x-large;
}
</style >


