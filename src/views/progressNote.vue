<template>
	<div class="note">
		<!-------small screen------>
		<div class="flex mx-auto justify-center -mt-16">
      		<img src="../assets/images/medkollate logo 3.png" alt="" class="deal w-60">
    	</div>
		<h2 class="progress md:hidden text-center border-4 mx-20 py-3 border-green-700 font-bold rounded-2xl">PROGRESS NOTE</h2>

		<div class="md:hidden">
			<div>
				<h2 class="mx-12 mt-5 text-green-400 font-bold">View Patient's list</h2>
			</div>
			<div class="bigBorder mt-7 block mx-auto text-center">
				<h2 class="pie bg-green-400 mx-12 rounded-t-md py-2 font-bold">PHYSICAL MEASUREMENT</h2>
				<div class="bg-sky-400 mx-12 py-5">
					<div class="block">
						<label class="">BP Measurement mm/hg</label>
						<input type="text" placeholder="Input Values here" class="bad outline-none border-2 py-1 rounded w-5/6 " v-model="firstInput">
					</div>
					<div class="block pt-2 ">
						<label class="">Pulse Rate</label>
						<input type="text" placeholder="Input Values here" class="bad outline-none border-2 py-1 rounded w-5/6" v-model="secondInput">
					</div>
					<div class="block py-2">
						<label >CV</label>
						<input type="text" placeholder="Input Values here" class="bad outline-none border-2 py-1 rounded w-5/6" v-model="thirdInput">
					</div>
					<div class="block pt-2 pb-4">
						<label class="">Body Temperature (C)</label>
						<input type="text" placeholder="Input Values here" class="bad outline-none border-2 py-1 rounded w-5/6" v-model="lastInput">
					</div>

				</div>
			</div>

			<div class="mt-4">
				<h3 class="text-center font-bold ">ASSESSMENT</h3>

				<div>
					<input type="text" class="border-2 rounded-lg w-4/6 py-20 border-green-400 flex mx-auto outline-none" placeholder="Type Here">
				</div>
			</div>
			<div>
				<button class="mx-auto flex justify-center text-green-400 text-lg font-bold mt-4 hover:text-slate-200 hover:border-white rounded hover:bg-black px-5">Refer to Lab</button>

				<button class="bg-transparent flex mx-auto font-bold mt-2 hover:bg-green-700 hover:text-white hover:border-white px-5 rounded">Enter</button>
			</div>
			<div>
				<button class="border-2 border-black px-9 py-1 flex mx-auto hover:bg-green-700 hover:text-white hover:border-white my-4 rounded" @click="allInput">Transfer to doctor</button>
			</div>
			
		</div>

		<!-----Screen view Design--->

		<div class="hidden md:flex">
			<div class="">
				<div class="mt-8">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mx-16 text-green-400">
   					<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
					</svg>
				</div>

				<div class="border-0 border-green-400 outline-none mx-80 w-6/12 py-2 rounded-lg -mt-9">
					<div>
						<div class="absolute mx-[80px] mt-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 text-blue-400 h-5 mt-0 mx-2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
							</svg>
						</div>
					</div>
					<input type="text" placeholder="Search patient's file" class="border-2 border-green-400 flex mx-auto px-8 py-1 rounded-lg">

				</div>

				<div>
					<div class="grid grid-cols-2">

						<nav class="mx-7 mt-4">
							<div class="bg-sky-200 my-2 w-52 py-2 rounded-lg">
								<img src="../assets/images/doctor-svgrepo-com.svg" class="w-20 h-9">

									<div class="till absolute mx-20 -mt-7">
										<p>Hello Dr Bello,</p>
										<p>Here's the file of your patient.</p>
									</div>
							</div>
							<!----nav bar ---->

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded py-2 px-5 transition ease-in-out duration-500 ">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0H24V24H0z"/><path d="M10 2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H8v2h5V9c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-1H8v6h5v-1c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-1H7c-.552 0-1-.448-1-1V8H4c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h6zm9 16h-4v2h4v-2zm0-8h-4v2h4v-2zM9 4H5v2h4V4z"/></svg>
								</div>
								<RouterLink to="/" class="zeal font-semibold mx-1 text-sm">PATIENT'S DATA</RouterLink>	
							</div>

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded py-2 px-5 mt-2 transition ease-in-out duration-500 ">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"/></svg>
								</div>
								<RouterLink to="/charts"  class="zeal font-semibold mx-1 text-sm">CHART</RouterLink>	
							</div>
							
							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded py-2 px-5 mt-2 transition ease-in-out duration-500 ">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
								</div>
								<RouterLink to="/images"  class="zeal font-semibold mx-1 text-sm">IMAGES</RouterLink>	
							</div>

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded py-2 px-5 mt-2 transition ease-in-out duration-500 ">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0H24V24H0z"/><path d="M13.196 2.268l3.25 5.63c.276.477.112 1.089-.366 1.365l-1.3.75 1.001 1.732-1.732 1-1-1.733-1.299.751c-.478.276-1.09.112-1.366-.366L8.546 8.215C6.494 8.837 5 10.745 5 13c0 .625.115 1.224.324 1.776C6.1 14.284 7.016 14 8 14c1.684 0 3.174.833 4.08 2.109l7.688-4.439 1 1.732-7.878 4.549c.072.338.11.69.11 1.049 0 .343-.034.677-.1 1H21v2l-17 .001c-.628-.836-1-1.875-1-3.001 0-1.007.298-1.945.81-2.73C3.293 15.295 3 14.182 3 13c0-2.995 1.881-5.551 4.527-6.55l-.393-.682c-.552-.957-.225-2.18.732-2.732l2.598-1.5c.957-.552 2.18-.225 2.732.732zM8 16c-1.657 0-3 1.343-3 3 0 .35.06.687.17 1h5.66c.11-.313.17-.65.17-1 0-1.657-1.343-3-3-3zm3.464-12.732l-2.598 1.5 2.75 4.763 2.598-1.5-2.75-4.763z"/></svg>
								</div>
								<RouterLink to="/labResults"  class="zeal font-semibold mx-1 text-sm ">LAB RESULTS</RouterLink>	
							</div>

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
								</div>
								<RouterLink to="/payments"  class="zeal font-semibold mx-1 text-sm">PAYMENTS</RouterLink>	
							</div>

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zm6 2H4.003L4 20h11V9zm-6.497 9l-3.536-3.536 1.414-1.414 2.122 2.122 4.242-4.243 1.414 1.414L8.503 18z"/></svg>
								</div>
								<RouterLink to="/clinicalOrder"  class="zeal mx-1 text-sm font-semibold">CLINICAL ORDER</RouterLink>	
							</div>

							<button @click="goToProgress" class="zeal flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-4 mt-2  mx-0 text-sm font-semibold">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 13H4v3h16v-3zM8 5H4v9h4V5zm6 0h-4v9h4V5zm6 0h-4v9h4V5z"/></svg>
								</div>
								PROGRESS NOTE
							</button>

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0H24V24H0z"/><path d="M8 3v2H6v4c0 2.21 1.79 4 4 4s4-1.79 4-4V5h-2V3h3c.552 0 1 .448 1 1v5c0 2.973-2.162 5.44-5 5.917V16.5c0 1.933 1.567 3.5 3.5 3.5 1.497 0 2.775-.94 3.275-2.263C16.728 17.27 16 16.22 16 15c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.371-.92 2.527-2.176 2.885C19.21 20.252 17.059 22 14.5 22 11.462 22 9 19.538 9 16.5v-1.583C6.162 14.441 4 11.973 4 9V4c0-.552.448-1 1-1h3zm11 11c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/></svg>
								</div>
								<RouterLink to="/diagnosis"  class="zeal mx-1 text-sm font-semibold">DIAGNOSIS</RouterLink>	
							</div>

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 7h2v10h-2V7zm4 4h2v6h-2v-6zm-8 2h2v4H7v-4zm8-9H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"/></svg>
								</div>
								<RouterLink to="/clinicalTasks"  class="zeal mx-1 text-sm font-semibold">CLINICAL TASKS</RouterLink>	
							</div>

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992zM19 4H5v16h14V4zm-7.707 9.121l4.243-4.242 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414 2.475 2.475z"/></svg>
								</div>
								<RouterLink to="/wardHistory"  class="zeal mx-1 text-sm font-semibold">WARD HISTORY</RouterLink>	
							</div>

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0H24V24H0z"/><path d="M17 2v2h3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h3V2h10zM7 6H5v14h14V6h-2v2H7V6zm6 5v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2h2zm2-7H9v2h6V4z"/></svg>
								</div>
								<RouterLink to="/wardHistory"  class="zeal mx-1 text-sm font-semibold">WARD HISTORY</RouterLink>	
							</div>

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0H24V24H0z"/><path d="M17 2v2h3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h3V2h10zM7 6H5v14h14V6h-2v2H7V6zm6 5v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2h2zm2-7H9v2h6V4z"/></svg>
								</div>
								<RouterLink to="/outgoingRefferal"  class="zeal mx-1 text-sm font-semibold">OUTGOING REFFERAL</RouterLink>	
							</div>

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.2 12l2.8 4h-2.4L12 13.714 10.4 16H8l2.8-4L8 8h2.4l1.6 2.286L13.6 8H15V4H5v16h14V8h-3l-2.8 4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"/></svg>
								</div>
								<RouterLink to="/dischargeSummary"  class="zeal mx-1 text-sm font-semibold">DISCHARGE SUMMARY</RouterLink>	
							</div>

							<div class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
								<div class="mt-1 w-2 mx-3">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 15 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8zm7-2V5h-5a2 2 0 0 0-2 2v12h7zm-9 0V7a2 2 0 0 0-2-2H4v14h7z"/></svg>
								</div>
								<RouterLink to="/bookAppointment"  class="zeal mx-1 text-sm font-semibold">BOOK APPOINTMENT</RouterLink>	
							</div>							
						</nav>



						<section class="">
								<div class="">
									<h2 class="ball absolute border-4 -mx-4 py-1 border-green-700 font-bold rounded-2xl px-32">PROGRESS NOTE</h2>

									<div class="absolute -mt-2 flex">
      							<img src="../assets/images/medkollate logo 3.png" alt="" class="card w-44 ">
    							</div>
								</div>

								<section>
										<div class="">
											<div class="tag block text-white bg-green-700 rounded-lg mt-20 text-sm w-48 px-9 font-semibold -mx-4 py-1">
												<h3>View Patient's list</h3>
											</div>

											<div class="area mt-7">
												<div class="absolute flex bg-green-300 w-7/12 -mx-4 py-2 rounded-lg">
														<h3 class="nurse absolute font-semibold mx-72">Nurse</h3>
														<div class="pin ">
															<input type="date">	
														</div>
												</div>

												<div class="absolute bg-green-200 mt-12 -mx-3 px-3 w-7/12 rounded border-l-8 border-green-700 py-10">
													<h3 class=" -mt-5">Vital Signs</h3>
													<section class="flex justify-between bg-green-200">
														<div class="my-3 ">
															<label for="">BP Measurement mm/hg</label>
															<input type="text" class="border-2 outline-none py-1 px-2" placeholder="MM/Hg" v-model="firstInput">
														</div>
														<div class="brand my-4  ">
															<label for="">Pulse Rate</label>
															<input type="text" class=" border-2 outline-none py-1 px-2" placeholder="Input Pulse Rate" v-model="secondInput">
														</div>
													</section>

													<section class="flex justify-between bg-green-200">
														<div>
															<label for="">CVS</label>
															<input type="text" class="py-1 border-2 outline-none px-2" placeholder="Input here" v-model="thirdInput">
														</div>
													<div>
															<label for="">Body Temperature</label>
															<input type="text" class="py-1 border-2 outline-none px-2" placeholder="Input value here" v-model="lastInput">
														</div>
													</section>

												</div>	
											</div>

											<div>
												<div class="access mt-80 absolute font-semibold text-lg">ASSESSMENT</div>
												
												<div>
													<input type="text" class="braid border-2 absolute rounded-lg w-7/12 py-20 border-blue-400 outline-none px-3" v-model="wordInput" placeholder="Type Here">
												</div>
											</div>

											<div class="tabs absolute">
												<button class="border-2 border-black px-3 py-1 rounded-lg -mx-3 hover:text-white hover:bg-black">
													Transfer to doctor
												</button>

												<div class="plan ">
													<button class="absolute border-2 border-black px-8 py-0 -mt-8 rounded-lg hover:text-white hover:bg-black" @click="allInput">Enter</button>
												</div>
											</div>
											<button class="diff absolute  text-sm px-4 py-1 bg-green-500 rounded-lg hover:text-white hover:bg-black">Refer to Lab</button>
										</div>
								</section>
						</section>
					</div>
				</div>
			</div>		
		</div>
	</div>
</template>

<style scoped>
	.diff{
		margin-top: 630px;
		margin-left: 592px;
	}
	.plan{
		margin-left: 590px;
	}
	.braid{
		margin-top: 360px;
		margin-left: -16px;
	}
	label{
		display: block;

	}
	.zeal{
		font-size: 11px;
	}
	.bad{
		height: 30px;
	}
	.till{
		font-size: 8px;
	}
	.card{
		margin-left: 500px;
	}
	.pin{
		margin-left: 548px;
	}
	.access{
		margin-left: 300px;
	}
	.tabs{
		margin-top: 580px;
	}
@media only screen and (max-width: 300px){
	.deal{
		width: 200px;
	}
	.progress{
		font-size: 11px;
		padding: 12px 9px;
	}
	label{
		font-size: 12px;

	}
	.pie{
		font-size: 12px;
	}

}
@media only screen and (max-width: 1025px){
	.access{
		margin-left: 200px;
	}
	.braid{
		margin-left: -80px;
	}
	.design{
		padding: 0px 80px;
	}
	.ball{
		margin-left: -80px;
	}
	.tag{
		margin-left: -78px;
	}
	.brand{
		margin-left: 20px;
	}
	.area{
		margin-left: -60px;
	}
	.pin{
		margin-left: 440px;
	}
	.nurse{
		margin-left: 200px;
	}
	.diff{
		margin-top: 630px;
		margin-left: 402px;
	}
	.plan{
		margin-left: 477px;
	}
	.tabs{
		margin-top: 580px;
		margin-left: -70px;
	}

}
@media only screen and (min-width: 1050px){
	.brand{
		margin-left: 140px;
	}
	.pin{
		margin-left: 560px;
	}
}

</style>
<script setup>
import {ref} from "vue"
import { useRouter } from "vue-router"

const firstInput = ref("")
const secondInput = ref(" ")
const thirdInput = ref(" ")
const lastInput = ref(" ")
const allValues = ref([])
const router = useRouter()
const wordInput = ref("")


const goToProgress = () =>{
	router.push('/progressNote')
}

const allInput = () => {
  let newValue = {
    firstInput: firstInput.value,
    secondInput: secondInput.value,
    thirdInput: thirdInput.value,
    lastInput: lastInput.value
  }

  localStorage.setItem("values", JSON.stringify(newValue))

  window.location.reload(newValue);
  //let patientsData = allValues.value.push(newValue.value);
  //console.log("patients data",patientsData);
  console.log(newValue);
} 

</script>