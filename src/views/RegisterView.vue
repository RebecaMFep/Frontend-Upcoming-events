<script setup>
import RegisterForm from "./../components/login/RegisterForm.vue";
</script>

<template>
    <h1>Nuevo usuario</h1>
    <div id="register-box">  
        <RegisterForm />
    </div>
</template>

<style lang="scss" scoped>
main {
    background-color: white;
    height: 90%;
    justify-content: center;
}
#register-box{
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

