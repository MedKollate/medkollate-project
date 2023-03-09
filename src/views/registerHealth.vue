<script setup>
import registerNav from '../components/registerNav.vue';
</script>

<template>
  <main class="w-screen h-screen overflow-x-hidden py-16 px-20">
    <registerNav />

    <div class="mt-12">
      <form action="">
        <div class="grid grid-cols-2 gap-x-32 gap-y-4 mb-10">
          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="hospital_name">Name of Hospital</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="hospital_name"
              id="hospital_name" placeholder="Input name of hospital here" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="hospital_address">Address of Hospital</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="hospital_address"
              id="hospital_address" placeholder="Input address here" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="hospital_lga">L G A of Hospital</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="hospital_lga"
              id="hospital_lga" placeholder="Input LGA" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="hospital_location">Location of Hospital</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="hospital_location"
              id="hospital_location" placeholder="Input location" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="hospital_contact">Contact Number</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="tel" name="hospital_contact"
              id="hospital_contact" placeholder="Input contact info" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="hospital_email">Email Address</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="email" name="hospital_email"
              id="hospital_email" placeholder="Input contact number" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="hospital_no_staff">Number of Staff</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="hospital_no_staff"
              id="hospital_no_staff" placeholder="Enter total staff strength here" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="hospital_reg_no">Government Registration Number</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="hospital_reg_no"
              id="hospital_reg_no" placeholder="Enter Licence Number here
      " required>
          </div>
        </div>

        <RouterLink to="/registerPortal" class="flex justify-end items-center mt-24">
          <input class="uppercase rounded-md px-10 py-4 submit text-white font-bold" type="button" value="continue">
        </RouterLink>
      </form>
    </div>
  </main>
</template>

<style scoped> main {
   background: #D9D9D9;
 }

 .submit {
   background-color: #092C4C;
   font-family: 'Inter';
   ;
 }
</style>