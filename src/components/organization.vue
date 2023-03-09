<script setup>
import blueBtn from './blueBtn.vue';
</script>

<template>
  <main>
    <div class="box p-10">
      <i class="fa-solid fa-arrow-left"></i>
      <h2>Organization</h2>
      <p>We organise , manage patients record, Physician records of their patients, ensure that all departments in the
        health care center are connected together for effective collaboration.</p>
      <div class="flex justify-center">
        <blueBtn />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  background-color: #61ac559c;
}

.box {
  background: #ffffffe6 url(../assets/images/organizing-projects/pana.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: 1px solid #000000;
  width: 400px;
  height: 500px;
  top: 50%;
  left: 50%;
}

h2 {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #61AC55;
  margin-bottom: 20px;
}

p {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 31px;
  letter-spacing: 0.04em;
  color: #000000;
  margin-bottom: 20px;
}
</style>