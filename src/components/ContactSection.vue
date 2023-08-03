<template>
    <div id="contact-section" class="font-default  py-16 px-10 md:px-28 bg-gradient-to-br from-teal-50 to-teal-100">
        <div>
            <h1 class="font-bold text-xl leading-relaxed mb-8">
                CONTACT US
            </h1>
            <p class="text-lg font-bold mb-6">
                Get in touch
            </p>
            <p class="text-lg mb-6">We’ve Got Your Back! What Do You Need?</p>
        </div>
        
        <div class="md:flex justify-between gap-10">
            <div class="md:w-1/2 md:order-2">
                <img class="md:max-w-full md:mx-auto mb-8" src="../assets/images/homepage/contact.svg" alt="About us">
                
            </div>
            <div class="md:w-1/2 md:order-1">
            <form method="post" class="validate" target="_self">
                <div class="mb-6">
                    <input type="text" id="name" name="name" placeholder="Please Enter Name and Surname here*" class="w-full px-4 py-2 border-pryGreen rounded-lg border-2 focus:outline-none focus:ring focus:border-pryBlue">
                </div>
                <div class="mb-6">
                    <input type="email" id="email" name="email" placeholder="Please Enter Email here*" class="w-full px-4 py-2 border-pryGreen rounded-lg border-2 focus:outline-none focus:ring focus:border-pryBlue">
                </div>
                <div class="mb-6">
                    <textarea id="message" name="message" rows="6" placeholder="Tell us all that you need, we deliver" class="w-full px-4 py-2 border-pryGreen border-2 rounded-lg focus:outline-none focus:ring focus:border-pryBlue"></textarea>
                </div>
                <div class="mb-6">
                    <GreenBtn type="submit" class="w-full">Submit</GreenBtn>
                </div>
                        
            </form>
            
        </div>
    </div>

        <div class="md:flex justify-start gap-10">
            <div class="md:w-1/2 ">
                <p class="text-lg font-bold mb-6 text-center lg:text-left">
                    Connect with us via
                </p>
             
                <div class="grid grid-cols-1 lg:grid-cols-3">
                    <a href="https://web.facebook.com/profile.php?id=100082947026709" class="flex justify-center items-center mr-6">
                        <img class="w-8 h-8 mr-1 mb-3" src="../assets/images/SVGs/facebook.svg" alt="Facebook">
                        @Medkollate
                    </a>
                    <a href="https://www.instagram.com/medkollateng/" class="flex justify-center items-center mr-6">
                        <img class="w-8 h-8 mr-1 mb-3" src="../assets/images/SVGs/instagram.svg" alt="instagram">@Medkollate
                    </a>
                    <a href="https://twitter.com/MedKollate" class="flex justify-center items-center mr-6">
                        <img class="w-8 h-8 mr-1 mb-5" src="../assets/images/SVGs/twitter.svg" alt="Twitter">@MedkollateNg
                    </a>
                </div>
            </div>
            <div class="md:w-1/2">
                <p class="text-center md:text-right text-xl font-bold mt-8">Send a direct mail</p>
                <p class="text-center md:text-right italic text-xl mb-8"> MedKollate@gmail.com</p>
            </div>
  
 
        </div>
        
    </div>
</template>
<script setup>
    import GreenBtn from './GreenBtn.vue';
</script>