<template>
    <main>
        
        <homeNav class="mb-16" />
        <div class="flex py-16 px-20">
            <div class="w-3/5 flex flex-col justify-center align-center">
                <h1 class="mb-10 ">Seamless, Secure, Fast, Digital Health Recording</h1>
                <RouterLink to="/about" class="flex justify-end items-center">
                    <button class="mb-16">
                        Learn More
                        <i class="fa-solid fa-arrow-right ml-4"></i>
                    </button>
                </RouterLink>

                <div class="flex justify-center w-11/12">
                    <RouterLink to="/register" class="mr-16">
                        <greenBtn />
                    </RouterLink>
                    <whiteBtn />
                </div>
            </div>
            <div class="w-5/12">
                <img src="../assets/images/homepage.png" alt="Data Collection">
            </div>
        </div>
    </main>
</template>

<script setup>
import GreenBtn from "../components/GreenBtn.vue";
import whiteBtn from "../components/whiteBtn.vue";
import { RouterLink, RouterView } from "vue-router";
import homeNav from "../components/HomeNav.vue";
</script>

<style scoped>
h1 {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #202020;
}

button {
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.02em;
}
</style>
