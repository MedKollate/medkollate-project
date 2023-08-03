<template>
  <div class="text-customBlue text-center font-default bg-secGreen py-8 px-6 shadow md:flex justify-around items-center">
    <div class="flex">
      <span class="mr-1">
        <img class="max-w-full h-auto" src="../assets/images/logo.svg" alt="Logo">
      </span>

    </div>

    <span @click="toggleMenu()" class="absolute md:hidden right-12 top-8 cursor-pointer text-xl">
        <i :class="[open ? 'fas fa-times' :  'fas fa-bars']"></i>
    </span>
    
  
    <ul class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10  text-pryGreen text-lg font-bold md-static  md:w-auto w-full top-20 duration-1000 ease-in bg-secGreen cursor-pointer" :class="open ? 'block' : 'hidden'">
      <li class="md:mx-3 lg:mx-6 md:my-0 my-6" v-for="link in links" :key="link.name">
        <a @click="scrollToSection(link.sectionId)" class="text-xl hover:text-pryBlue"> {{ link.name }}</a>
      </li>

      
      <RouterLink to="/signin">
        <li class="md:mx-3 lg:mx-6 md:my-0 my-6">
        <a class="text-xl hover:text-pryBlue">Sign in</a>
      </li>
     </RouterLink>

      <RouterLink to="/register">
        <GreenBtn class="hover:bg-pryBlue text-white">
          Register
        </GreenBtn>
     </RouterLink>

    </ul>
</div>
</template>

<script>
import { ref } from 'vue'
import GreenBtn from './GreenBtn.vue'
import { RouterLink, RouterView } from 'vue-router'

export default {
    setup() {
      const open = ref(false)
      const links = [
        { name: "Home", sectionId: "home-section" },
        { name: "About us", sectionId: "about-section" },
        { name: "Our Services", sectionId: "services-section" },
        { name: "Contact us", sectionId: "contact-section" },
        { name: "Pricing", sectionId: "pricing-section" },
        
      ]
      
      function toggleMenu(){
        open.value =!open.value
      }

      function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

      return {links, open, toggleMenu, scrollToSection}
      
    },
    components: { GreenBtn }
}

</script>