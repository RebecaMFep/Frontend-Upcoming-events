<script setup>

</script>

<template>
    <header> 
        <div class="logo">
            <img src="../../assets/images/logoHeader.png" alt="logo">
        </div>

        <v-container class="text-center">
            <v-row justify="center">
                <v-col cols="12" sm="6" md="4">
                    <v-btn color="orange accent-3" block size="large">sesión</v-btn>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                    <v-btn color="deep-orange darken-1" block size="large">Registro</v-btn>
                </v-col>
            </v-row>
        </v-container>

    </header> 
</template>

<style lang="scss" scoped>

header {
    background-color: #7DC6D6;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 150px;
    @media (max-width: 800px) {
    background-size: cover;
    margin: 0 auto;
    }
}
</style>