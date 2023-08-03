<template>
    <div class="text-customBlue text-pryGreen text-center font-default font-bold bg-white py-8 px-6 shadow flex justify-around text-xl items-center">
      <div class="flex">
        <span class="mr-1">
          <img class="max-w-full h-auto" src="../assets/images/logo.svg" alt="Logo">
        </span>
  
      </div>

      <RouterLink to="/">
          <a class="text-pryGreen hover:text-pryBlue">Back to Home</a>
       </RouterLink>
  
      
  </div>
  </template>
  
  <script>
  import { RouterLink, RouterView } from 'vue-router'
  
  
  </script>