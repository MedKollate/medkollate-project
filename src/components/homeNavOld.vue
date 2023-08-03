<template>
  <div class="flex h-6 items-center justify-between">
    <img class="w-96" src="../assets/images/medkollate logo 3.png" alt="Logo">

    <div class="w-1/2">
      <nav class=" flex justify-between">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/services">Our Services</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";

// const homeNav = ref(false);

</script>

<style scoped>
nav {
  color: #1AA1E5;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
}
</style>