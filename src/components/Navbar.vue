<template>
<div class="md:hidden">
	<div class="flex">
		<div class="mx-4 mt-8 ">
			<button @click="toggleNav">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-8">
  				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
				</svg>
			</button>
		</div>
	</div>
  <div class="mt-1 mx-2 absolute w-10/12">
    <nav class="mx-5 md:flex text-sm" v-show="navBar">
      <RouterLink to="/" class="absolute bg-sky-200 hover:bg-green-700 py-2 w-11/12 transition ease-in-out duration-500 px-2 rounded">PATIENT'S DATA</RouterLink>
      <RouterLink to="/charts" class="absolute block bg-sky-200 my-10 transition w-11/12 ease-in-out duration-500 hover:bg-green-700 py-2 px-2 rounded">CHART</RouterLink>
      <RouterLink to="/images" class="absolute bg-sky-200 py-2 mt-20 w-11/12 px-4 transition ease-in-out duration-500 rounded hover:bg-green-700">IMAGES</RouterLink>
      <RouterLink to="/labResults" class="lab absolute block mb-3 w-11/12 transition ease-in-out duration-500 bg-sky-200 py-2 px-2 hover:bg-green-700 rounded">LAB RESULTS</RouterLink>
      <RouterLink to="/payments" class="payment absolute bg-sky-200 py-2 w-11/12 hover:bg-green-700 mt-3 transition ease-in-out duration-500 px-2 rounded">PAYMENTS</RouterLink>
      <RouterLink to="/clinicalOrder" class="clinic absolute block w-11/12 my-3 bg-sky-200 py-2 transition ease-in-out duration-500 px-2 hover:bg-green-700 rounded">CLINICAL ORDER</RouterLink>
      <RouterLink to="/progressNote" class="progress absolute bg-sky-200 w-11/12 py-2 px-2 transition ease-in-out duration-500 -mt-1 rounded block hover:bg-green-700">PROGRESS NOTE</RouterLink>
      <RouterLink to="/diagnosis" class="diagnosis absolute mt-2 block w-11/12 bg-sky-200 transition ease-in-out duration-500 hover:bg-green-700 py-2 px-2 rounded mb-3">DIAGNOSIS</RouterLink>
      <RouterLink to="/clinicalTasks" class="task absolute bg-sky-200 w-11/12 mt-2 mb-3 py-2 px-2 hover:bg-green-700 transition ease-in-out duration-500 rounded">CLINICAL TASKS</RouterLink>
      <RouterLink to="/wardHistory" class="ward absolute block mt-3 w-11/12 mb-3 bg-sky-200 hover:bg-green-700 py-2 px-2 transition ease-in-out duration-500 rounded">WARD HISTORY</RouterLink>
      <RouterLink to="/outgoingRefferal" class="out absolute mt-3 mb-3 bg-sky-200 py-2 px-2 transition ease-in-out duration-500 hover:bg-green-700 w-11/12 rounded">OUTGOING REFFERAL</RouterLink>
      <RouterLink to="/dischargeSummary" class="summary absolute block mt-3 bg-sky-200 transition ease-in-out duration-500 hover:bg-green-700 py-2 w-11/12 px-2 rounded">DISCHARGE SUMMARY</RouterLink>
      <RouterLink to="/bookAppointment" class="book absolute block my-2 bg-sky-200 transition ease-in-out duration-500 w-11/12 py-2 px-2 hover:bg-green-700 rounded">BOOK APPOINTMENT</RouterLink>
    </nav>
  </div>


        <!-----Screen view Design--->
        <div>
          
        </div>


</div>
</template>

<script setup>
import { ref } from "vue";

const navBar = ref(false);

const toggleNav = () => {
  navBar.value = !navBar.value
}
</script>

<style scoped>
.lab{
  margin-top: 120px;
}
.payment{
  margin-top: 160px;
}
.clinic{
  margin-top: 200px;
}
.progress{
  margin-top: 240px;
}
.diagnosis{
  margin-top: 280px;
}
.task{
  margin-top: 320px;
}
.ward{
  margin-top: 360px;
}
.out{
  margin-top: 400px;
}
.summary{
  margin-top: 440px;
}
.book{
  margin-top: 480px;
}
</style>