
import GreenBtn from '../components/greenBtn.vue';

<template>
    <main class="w-screen h-screen overflow-x-hidden py-16 px-20">
        <homeNav class="mb-24" />
        <div class="flex">
            <div class="w-2/5">
                <img src="../assets/images/about.png" alt="About Us">
                <RouterLink to="/contact" class="flex justify-center mt-16">
                    <blueBtn />
                </RouterLink>
            </div>

            <div class="w-3/5">
                <h1>ABOUT US</h1>
                <p>At MedKollate, we understand the need to optimise processes and services and the importance of data
                    security and trust. Which is why we are dedicated to providing an easy to use, secure and budget
                    friendly platform for our clients.
                    <br /> <br /> Our goal is to build the largest budget friendly EMR platform that allows hospitals in
                    Africa
                    optimíse service delivery
                </p>
            </div>
        </div>
    </main>
</template>

<script setup>
import blueBtn from "../components/blueBtn.vue";
import homeNav from "../components/homeNav.vue";
</script>

<style scoped>
h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 28px;
    text-align: center;
    color: #4DA58A;
    margin-bottom: 40px;
}

p {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 42px;
    color: #202020;
}
</style>