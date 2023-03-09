<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

</script>

<template>
  <main>
    <div>

      <Navbar class="hidden" />

    </div>

    <RouterView />
  </main>
</template>



