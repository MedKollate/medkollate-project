<script setup>
import registerNav from '../components/registerNav.vue'
</script>

<template>
  <main class="w-screen h-screen overflow-x-hidden py-16 px-20">
    <registerNav />

    <form action="" class="h-3/5">
      <div class="h-full flex flex-col justify-center items-center">
        <label class="text-black text-3xl font-bold mb-4" for="generateID">Generate ID</label>
        <!-- <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="generateid" id="generateid"> -->
      </div>

      <RouterLink to="" class="flex justify-end items-center mt-16">
        <input class="uppercase rounded-md px-10 py-4 submit text-white font-bold" type="button" value="generate">
      </RouterLink>

    </form>
    <RouterLink to="/registerStaff">
      <img class="mt-16" src="../assets/images/SVGs/arrow-left.svg" alt="Arrow Left">
    </RouterLink>

  </main>
</template>

<style scoped>
main {
  background: #D9D9D9;
}

.submit {
  background-color: #092C4C;
  font-family: 'Inter';
}
</style>