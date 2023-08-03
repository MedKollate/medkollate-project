<template>
  <div id="pricing-section" class="font-default py-20 md:gap-20 px-10 md:px-28 bg-teal-50">
      <div class="mb-10">
        <h1 class="font-bold text-xl mb-5">
          PRICING
        </h1>
        <p class="text-lg leading-relaxed mb-5">
          Our pricing system is affordable, convenient and tailored to suit your pockets and needs. Switch and cancel at any time.
        </p>
      </div>
      
              
        <div class="m-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center items-start mb-20">            

          <div class="flex flex-col h-full items-center justify-start bg-gradient-to-b from-teal-300 to-teal-100 rounded-2xl py-20 px-5">
            
            <h3 class="font-bold text-lg text-pryGreen mb-3">
              Free
            </h3>
            <h3 class="font-bold text-lg text-white mb-5">
              $0/Month
            </h3>
            <div class="text-sm text-pryGreen">
              <p>2 Administrators</p>
              <p>20 Patients onboard</p>
              <p>Patient access</p>
            </div>
          </div>

          <div class="flex flex-col h-full items-center justify-start bg-white border-2 border-secGreen rounded-2xl py-20 px-5">
            
            <h3 class="font-bold text-lg text-pryGreen mb-3">
              Professional
            </h3>
            <h3 class="font-bold text-lg text-secGreen mb-5">
              $25/Month
            </h3>
            <div class="text-sm text-pryGreen">
              <p>5 Administrators</p>
              <p>200 Patients onboard</p>
              <p>Patient access</p>
            </div>
          </div>

          <div class="flex flex-col h-full items-center justify-start bg-gradient-to-b from-teal-100 to-teal-300 rounded-2xl py-20 px-5">
            
            <h3 class="font-bold text-lg text-pryGreen mb-3">
              Deluxe
            </h3>
            <h3 class="font-bold text-lg text-white mb-5">
              $45/Month
            </h3>
            <div class="text-sm text-pryGreen">
              <p>Unlimited Administrators</p>
              <p>Unlimited Patients onboard</p>
              <p>Patient access</p>
              <p>Payment management integration</p>
            </div>
          </div>     

        </div>

        <div class="m-auto text-center w-3/4">

          <p class="text-lg font-bold mb-5 text-pryGreen">
            Subscribe to our newsletter, be the first to hear about our offerings and news
          </p>
          
            <form method="post" class="validate md:flex justify-between gap-2" target="_self">
                <div class="mb-6 md:w-3/4">
                    <input type="email" id="email" name="email" placeholder="Please Enter Email address here" class="w-full px-4 py-3 border-pryGreen rounded-lg border-2 focus:outline-none focus:ring focus:border-pryBlue">
                </div>
                
                <div class="mb-6 md:w-1/4">
                    <GreenBtn type="submit" class="w-full px-4 py-2">Send</GreenBtn>
                </div>
                        
            </form>
            
          
      </div>
    </div>
    
</template>

<script setup>
  import GreenBtn from './GreenBtn.vue';
</script>