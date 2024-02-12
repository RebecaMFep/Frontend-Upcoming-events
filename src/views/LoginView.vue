<script setup>
import LoginForm from "./../components/login/LoginForm.vue";
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import FooterComponent from '@/components/footer/FooterComponent.vue';
</script>

<template>
    <div>
        <HeaderComponent />
        <h1>Iniciar sesión</h1>
       
        <LoginForm />
        <FooterComponent />
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


