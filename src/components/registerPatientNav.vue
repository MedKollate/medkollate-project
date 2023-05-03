<template>
  <main class="flex justify-between items-center mb-10">
    <img src="../assets/images/medkollate logo 3.png" alt="Logo 2">

    <h2>
      Registration Portal
    </h2>

    <RouterLink class="home" to="/">Home</RouterLink>
  </main>
</template>

<style scoped>
h2 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 50px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #fff;
  border: 2px solid #fff;
  padding: 0 60px;
}

.home {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #fff;
}
</style>