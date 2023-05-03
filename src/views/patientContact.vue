<script setup>
import registerPatientNav from '../components/registerPatientNav.vue';
</script>

<template>
  <main class="w-screen h-screen overflow-x-hidden py-16 px-20">
    <registerPatientNav />

    <div class="mt-12">
      <form action="">
        <div>
          <h2 class="uppercase text-white text-2xl font-semibold mb-6">Emergency Contact</h2>
          <div class="grid grid-cols-3 gap-x-32 gap-y-4 mb-10">
            <div class="flex flex-col">
              <label class="text-black text-3xl font-bold mb-4" for="contact_name">Name</label>
              <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="contact_name"
                id="contact_name" placeholder="Input name of patient here" required>
            </div>

            <div class="flex flex-col">
              <label class="text-black text-3xl font-bold mb-4" for="patient_age ">Age</label>
              <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="patient_age"
                id="patient_age" placeholder="Input age" required>
            </div>

            <div class="flex flex-col">
              <label class="text-black text-3xl font-bold mb-4" for="patient_email">Email Address</label>
              <input class="bg-white px-4 py-4 rounded-md border-black border" type="email" name="patient_email"
                id="patient_email" placeholder="Input email address" required>
            </div>

            <div class="flex flex-col">
              <label class="text-black text-3xl font-bold mb-4" for="patient_contact">Contact Number</label>
              <input class="bg-white px-4 py-4 rounded-md border-black border" type="tel" name="patient_contact"
                id="patient_contact" placeholder="Input contact info" required>
            </div>

            <div class="flex flex-col">
              <label class="text-black text-3xl font-bold mb-4" for="patient_address">Address</label>
              <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="patient_address"
                id="patient_address" placeholder="Input address here" required>
            </div>
          </div>
        </div>


        <RouterLink to="/patientContact" class="flex justify-end items-center mt-24">
          <input class="uppercase rounded-md px-10 py-4 submit text-white font-bold" type="button" value="continue">
        </RouterLink>

      </form>
    </div>
  </main>
</template>

<style scoped>
main {
  background: rgba(22, 134, 191, 0.9);
}

.submit {
  background-color: #092C4C;
  font-family: 'Inter';
}
</style>