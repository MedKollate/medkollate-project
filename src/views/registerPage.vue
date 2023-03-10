<script setup>
import homeNav from '../components/homeNav.vue';
</script>

<template>
  <main class="w-screen h-screen overflow-x-hidden py-16 px-20">
    <homeNav class="mb-16" />

    <div class="flex justify-betwwen items-center">
      <img src="../assets/images/people-talking/rafiki.png" alt="People Talking" class="w-1/2">

      <div class="flex flex-col justify-center items-center">
        <h2>Welcome to MedKollate</h2>
        <RouterLink to="/registerHealth">
          <button class="mb-16">
            Click to proceed
            <i class="fa-solid fa-arrow-right ml-4"></i>
          </button>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background: linear-gradient(180deg, #B3E0F6 0%, #DBF5E6 100%);
}

h2 {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 54px;
  letter-spacing: 0.04em;
  color: #202020;
  margin-bottom: 25px;
}

button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.02em;
}
</style>