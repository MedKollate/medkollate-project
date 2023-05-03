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
                        <label class="text-black text-3xl font-bold mb-4" for="staff_name">Name</label>
                        <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="staff_name"
                            id="staff_name" placeholder="Input name of staff here" required>
                    </div>

                    <div class="flex flex-col">
                        <label class="text-black text-3xl font-bold mb-4" for="staff_email">Email Address</label>
                        <input class="bg-white px-4 py-4 rounded-md border-black border" type="email" name="staff_email"
                            id="staff_email" placeholder="Input email address" required>
                    </div>

                    <div class="flex flex-col">
                        <label class="text-black text-3xl font-bold mb-4" for="staff_address">Address</label>
                        <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="staff_address"
                            id="staff_address" placeholder="Input address here" required>
                    </div>

                    <div class="flex flex-col">
                        <label class="text-black text-3xl font-bold mb-4" for="staff_location">State</label>
                        <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="staff_location"
                            id="staff_location" placeholder="Input location" required>
                    </div>

                    <div class="flex flex-col">
                        <label class="text-black text-3xl font-bold mb-4" for="marital_status">Marital Status</label>
                        <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="marital_status"
                            id="marital_status" placeholder="Input marital status" required>
                    </div>

                    <div class="flex flex-col">
                        <label class="text-black text-3xl font-bold mb-4" for="staff_depertment">Depertment</label>
                        <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="staff_depertment"
                            id="staff_depertment" placeholder="Input depertment" required>
                    </div>

                    <div class="flex flex-col">
                        <label class="text-black text-3xl font-bold mb-4" for="staff_contact">Contact Number</label>
                        <input class="bg-white px-4 py-4 rounded-md border-black border" type="tel" name="staff_contact"
                            id="staff_contact" placeholder="Input contact info" required>
                    </div>

                    <div class="flex flex-col">
                        <label class="text-black text-3xl font-bold mb-4" for="staff_designation">Designation</label>
                        <input class="bg-white px-4 py-4 rounded-md border-black border" type="text"
                            name="staff_designation" id="staff_designation" placeholder="Enter Designation" required>
                    </div>

                    <div class="flex flex-col">
                        <label class="text-black text-3xl font-bold mb-4" for="staff_emergence">Emergence Number</label>
                        <input class="bg-white px-4 py-4 rounded-md border-black border" type="text" name="staff_emergence"
                            id="staff_emergence" placeholder="Enter Licence Number here" required>
                    </div>
                </div>

                <RouterLink to="/staffID" class="flex justify-end items-center mt-24">
                    <input class="uppercase rounded-md px-10 py-4 submit text-white font-bold" type="button"
                        value="continue">
                </RouterLink>

            </form>
        </div>

    </main>
</template>

<style scoped>
main {
    background: #D9D9D9;
}

.submit {
    background-color: #092C4C;
    font-family: 'Inter';
    ;
}
</style>