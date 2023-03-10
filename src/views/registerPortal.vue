<script setup>
import registerNav from '../components/registerNav.vue';
</script>

<template>
  <main class="w-screen h-screen overflow-x-hidden py-16 px-20">
    <registerNav />

    <div class="mt-12 flex justify-between items-center mb-16">
      <img src="../assets/images/queue/amico.png" alt="People Queing">

      <div class="w-1/2 flex flex-col justify-center items-center">
        <RouterLink class="link mb-10" to="/registerStaff">Register Members of Staff</RouterLink>
        <RouterLink class="link" to="/registerPatient">Register Patient</RouterLink>
      </div>
    </div>

    <RouterLink to="/registerHealth">
      <img src="../assets/images/SVGs/arrow-left.svg" alt="Arrow Left">
    </RouterLink>
  </main>
</template>

<style scoped>
.link {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #0D5072;
  border: 1px solid #0D5072;
  border-radius: 8px;
  padding: 20px 40px;
}
</style>