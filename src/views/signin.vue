<template>
    <AlternateNav />

    <div class="font-default py-5 px-10 md:px-28 h-screen">
        <div class="m-auto text-center w-3/4 text-3xl md:4xl font-bold my-8">
            SIGN IN
        </div>

        <div class="m-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-center justify-center mt-20">
            <div>
                <img class="md:max-w-full mx-auto h-full" src="../assets/images/signin/staff.svg" alt="Staff">
                <BlueBtn class="mt-10 md:w-full lg:w-1/2">Sign in Staff</BlueBtn>
            </div>
            
            <div>
                <img class="md:max-w-full mx-auto h-full" src="../assets/images/signin/patients.svg" alt="Patient">
                <GreenBtn class="mt-10 md:w-full lg:w-1/2">Sign in Patient</GreenBtn>
            </div>
            
        </div>
   
    </div>

        
</template>
<script setup>
    import AlternateNav from "../components/AlternateNav.vue"
    import BlueBtn from "../components/BlueBtn.vue"
    import GreenBtn from "../components/GreenBtn.vue"
</script>