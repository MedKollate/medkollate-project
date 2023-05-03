<script setup>
import registerPatientNav from '../components/registerPatientNav.vue';
</script>

<template>
  <main class="w-screen h-screen overflow-x-hidden py-16 px-20">
    <registerPatientNav />

    <div class="mt-12">
      <form action="">
        <div class="grid grid-cols-3 gap-x-32 gap-y-4 mb-10">
          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="patient_name">Name</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="patient_name"
              id="patient_name" placeholder="Input name of patient here" required>
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

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="marital_status">Marital Status</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="marital_status"
              id="marital_status" placeholder="Input marital status" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="patient_occupation">Occupation</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="patient_occupation"
              id="patient_occupation" placeholder="Input occupation" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="patient_genotype">Genotype</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="patient_genotype"
              id="patient_genotype" placeholder="Input genotype" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="patient_allergy">Allergy</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="patient_allergy"
              id="patient_allergy" placeholder="Enter alleries" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="patient_blood">Blood Group</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="patient_blood"
              id="patient_blood" placeholder="Enter blood group" required>
          </div>

          <div class="flex flex-col">
            <label class="text-black text-3xl font-bold mb-4" for="patient_morbidity">Co-Morbidity</label>
            <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="patient_morbidity"
              id="patient_morbidity" placeholder="Underlying clinical issues" required>
          </div>
        </div>

        <div class="flex justify-end items-center mt-24">
          <RouterLink to="/patientContact" class="uppercase rounded-md px-10 py-4 submit text-white font-bold"> continue
          </RouterLink>
        </div>

      </form>

      <div class="w-fit">
        <RouterLink to="/registerPortal">
          <img class="w-10" src="../assets/images/SVGs/arrow-left-solid.svg" alt="Arrow Left">
        </RouterLink>
      </div>
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