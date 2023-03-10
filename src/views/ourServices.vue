<script setup>
// import organization from '../components/organization.vue';
import homeNav from '../components/homeNav.vue';
</script>

<template>
    <main class="w-screen h-screen overflow-x-hidden py-16 px-20">
        <homeNav class="mb-16" />
        <div class="flex w-full justify-center items-center">
            <div class="service p-10 rounded-2xl flex flex-col justify-center items-center">
                <h2>SERVICES WE OFFER</h2>
                <p>We are a health tech company that allow you to collect , collate and store Medical health records
                    efficiently and on time. Our services are tailored to the needs of our clients, bearing from research.
                    We are user centric , friendly and always a call away to attend to your needs.</p>
                <div class="w-full flex justify-between items-center pupop">
                    <div>
                        <img src="../assets/images/organizing-projects/pana.png" alt="Organizing Project">
                        <h3>Organization</h3>
                    </div>

                    <div>
                        <img src="../assets/images/building-blocks/cuate.png" alt="Support">
                        <h3>Support</h3>
                    </div>
                    <div>
                        <img src="../assets/images/time-management/amico-1.png" alt="24/7 Availability">
                        <h3>24/7 Availability</h3>
                    </div>
                    <div>
                        <img src="../assets/images/earth-and-moon/pana-1.png" alt="Automation">
                        <h3>Automation</h3>
                    </div>
                </div>
                <div>
                    <!-- <organization class="hover" /> -->
                </div>
            </div>
        </div>

    </main>
</template>

<style scoped>
main {
    background: linear-gradient(180deg, rgba(107, 221, 189, 0.8) 0%, rgba(40, 139, 103, 0.8) 100%);
}

.service {
    background: #FFFFFF;
    box-shadow: 0px 9px 46px 8px rgba(39, 107, 88, 0.25);
    border-radius: 30px;
}

h2 {
    font-family: 'K2D';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 47px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #000;
    margin-bottom: 20px;
}

p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 178.02%;
    text-align: justify;
    letter-spacing: 0.03em;
    color: #000;
    margin-bottom: 15px;
}

.pupop div {
    background: #FFFFFF;
    box-shadow: 0px 9px 10px 8px rgba(39, 107, 88, 0.25);
    border: 2px solid #000;
    border-radius: 12px;
    width: 255px;
    height: 319px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    cursor: pointer;
}

.pupop img {
    width: 218.55px;
    height: 144px;
    margin-bottom: 40px;
}

.pupop h3 {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 46px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #000;
}

.hover {
    position: absolute;
    top: 0;
    left: 0;
}
</style>