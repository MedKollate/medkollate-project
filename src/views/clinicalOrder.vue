<template>
	<div>
		<!------small screen design----->
		<div class="md:hidden">
			<div>
				<img src="../assets/images/medkollate logo 3.png" alt="" class="image flex mx-auto w-60 -mt-[56px]">
			</div>
			<div class="flex mx-auto justify-start mx-[20px] mt-[40px]">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="border-2 border-black rounded-full"
					width="50" height="50">
					<path fill="none" d="M0 0H24V24H0z" />
					<path
						d="M19.778 4.222c2.343 2.343 2.343 6.142 0 8.485l-7.07 7.071c-2.344 2.343-6.143 2.343-8.486 0-2.343-2.343-2.343-6.142 0-8.485l7.07-7.071c2.344-2.343 6.143-2.343 8.486 0zm-5.656 11.313L8.465 9.878l-2.829 2.83c-1.562 1.561-1.562 4.094 0 5.656 1.562 1.562 4.095 1.562 5.657 0l2.829-2.83zm4.242-9.899c-1.562-1.562-4.095-1.562-5.657 0L9.88 8.464l5.657 5.657 2.828-2.828c1.562-1.562 1.562-4.095 0-5.657z" />
				</svg>
				<p class="mt-12 -mx-12 font-bold text-sm">Drugs</p>
			</div>

			<div class="flex justify-center mb-[10px]">
				<button
					class="mt-[465px] border-2 border-black px-8 rounded-md font-semibold text-lg hover:text-slate-200 hover:bg-black">Prescribe
					Drugs</button>
			</div>
		</div>

		<!-------Screen Design------->

		<section class="md:flex hidden">
			<div class="grid grid-cols-2">
				<div class=" mx-[90px]">
					<nav class=" mt-[100px]">
						<div class="bg-sky-200 my-2 w-52 py-2 rounded-lg">
							<img src="../assets/images/doctor-svgrepo-com.svg" class="w-20 h-9">

							<div class=" absolute mx-16 -mt-8 text-[9px]">
								<p>Hello Dr Bello,</p>
								<p>Here's the file of your patient.</p>
							</div>
						</div>
						<!----nav bar ---->

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded py-2 px-5 transition ease-in-out duration-500 ">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0H24V24H0z" />
									<path
										d="M10 2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H8v2h5V9c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-1H8v6h5v-1c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-1H7c-.552 0-1-.448-1-1V8H4c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h6zm9 16h-4v2h4v-2zm0-8h-4v2h4v-2zM9 4H5v2h4V4z" />
								</svg>
							</div>
							<RouterLink to="/" class="zeal font-semibold mx-1 text-[12px]">PATIENT'S DATA</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded py-2 px-5 mt-2 transition ease-in-out duration-500 ">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0h24v24H0z" />
									<path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
								</svg>
							</div>
							<RouterLink to="/charts" class="zeal font-semibold mx-1 text-[12px]">CHART</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded py-2 px-5 mt-2 transition ease-in-out duration-500 ">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
								</svg>
							</div>
							<RouterLink to="/images" class="zeal font-semibold mx-1 text-[12px]">IMAGES</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded py-2 px-5 mt-2 transition ease-in-out duration-500 ">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0H24V24H0z" />
									<path
										d="M13.196 2.268l3.25 5.63c.276.477.112 1.089-.366 1.365l-1.3.75 1.001 1.732-1.732 1-1-1.733-1.299.751c-.478.276-1.09.112-1.366-.366L8.546 8.215C6.494 8.837 5 10.745 5 13c0 .625.115 1.224.324 1.776C6.1 14.284 7.016 14 8 14c1.684 0 3.174.833 4.08 2.109l7.688-4.439 1 1.732-7.878 4.549c.072.338.11.69.11 1.049 0 .343-.034.677-.1 1H21v2l-17 .001c-.628-.836-1-1.875-1-3.001 0-1.007.298-1.945.81-2.73C3.293 15.295 3 14.182 3 13c0-2.995 1.881-5.551 4.527-6.55l-.393-.682c-.552-.957-.225-2.18.732-2.732l2.598-1.5c.957-.552 2.18-.225 2.732.732zM8 16c-1.657 0-3 1.343-3 3 0 .35.06.687.17 1h5.66c.11-.313.17-.65.17-1 0-1.657-1.343-3-3-3zm3.464-12.732l-2.598 1.5 2.75 4.763 2.598-1.5-2.75-4.763z" />
								</svg>
							</div>
							<RouterLink to="/labResults" class="zeal font-semibold mx-1 text-[12px] ">LAB RESULTS
							</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" />
								</svg>
							</div>
							<RouterLink to="/payments" class="zeal font-semibold mx-1 text-[12px]">PAYMENTS</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zm6 2H4.003L4 20h11V9zm-6.497 9l-3.536-3.536 1.414-1.414 2.122 2.122 4.242-4.243 1.414 1.414L8.503 18z" />
								</svg>
							</div>
							<RouterLink to="/clinicalOrder" class="zeal mx-1 text-[12px] font-semibold">CLINICAL ORDER
							</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 13H4v3h16v-3zM8 5H4v9h4V5zm6 0h-4v9h4V5zm6 0h-4v9h4V5z" />
								</svg>
							</div>
							<RouterLink to="/progressNote" class="zeal mx-1 text-[12px] font-semibold">PROGRESS NOTE
							</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0H24V24H0z" />
									<path
										d="M8 3v2H6v4c0 2.21 1.79 4 4 4s4-1.79 4-4V5h-2V3h3c.552 0 1 .448 1 1v5c0 2.973-2.162 5.44-5 5.917V16.5c0 1.933 1.567 3.5 3.5 3.5 1.497 0 2.775-.94 3.275-2.263C16.728 17.27 16 16.22 16 15c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.371-.92 2.527-2.176 2.885C19.21 20.252 17.059 22 14.5 22 11.462 22 9 19.538 9 16.5v-1.583C6.162 14.441 4 11.973 4 9V4c0-.552.448-1 1-1h3zm11 11c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" />
								</svg>
							</div>
							<RouterLink to="/diagnosis" class="zeal mx-1 text-[12px] font-semibold">DIAGNOSIS
							</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M11 7h2v10h-2V7zm4 4h2v6h-2v-6zm-8 2h2v4H7v-4zm8-9H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z" />
								</svg>
							</div>
							<RouterLink to="/clinicalTasks" class="zeal mx-1 text-[12px] font-semibold">CLINICAL TASKS
							</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0H24V24H0z" />
									<path
										d="M17 2v2h3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h3V2h10zM7 6H5v14h14V6h-2v2H7V6zm6 5v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2h2zm2-7H9v2h6V4z" />
								</svg>
							</div>
							<RouterLink to="/wardHistory" class="zeal mx-1 text-[12px] font-semibold">WARD HISTORY
							</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0H24V24H0z" />
									<path
										d="M17 2v2h3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h3V2h10zM7 6H5v14h14V6h-2v2H7V6zm6 5v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2h2zm2-7H9v2h6V4z" />
								</svg>
							</div>
							<RouterLink to="/outgoingRefferal" class="zeal mx-1 text-[12px] font-semibold">OUTGOING
								REFFERAL</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M13.2 12l2.8 4h-2.4L12 13.714 10.4 16H8l2.8-4L8 8h2.4l1.6 2.286L13.6 8H15V4H5v16h14V8h-3l-2.8 4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z" />
								</svg>
							</div>
							<RouterLink to="/dischargeSummary" class="zeal mx-1 text-[11px] font-semibold">DISCHARGE
								SUMMARY</RouterLink>
						</div>

						<div
							class="flex bg-sky-200 hover:bg-green-700 w-52 rounded transition ease-in-out duration-500 py-2 px-5 mt-2">
							<div class="mt-1 w-2 mx-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 15 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8zm7-2V5h-5a2 2 0 0 0-2 2v12h7zm-9 0V7a2 2 0 0 0-2-2H4v14h7z" />
								</svg>
							</div>
							<RouterLink to="/bookAppointment" class="zeal mx-1 text-[12px] font-semibold">BOOK
								APPOINTMENT</RouterLink>
						</div>
					</nav>
				</div>

				<div>
					<div class="flex mx-auto">
						<div class="mt-7 -mx-[16px]">
							<input type="text" placeholder="Search Medkollate"
								class="board border-2 border-blue-400 font-semibold text-slate-400 py-1 px-7 outline-none rounded">
							<div class=" flex absolute -mt-[28px] ">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor"
									class="scale w-4 text-blue-400 h-5 mt-0 mx-2">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
								</svg>
							</div>
						</div>
					</div>

					<section class="">
						<div class="my-5 flex justify-between -mx-8">
							<div class="absolute mt-[15px] -mx-[120px]">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke-width="1.5" stroke="currentColor" class=" w-4 h-4 text-green-400">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
								</svg>

							</div>
							<div>
								<h2
									class="text border-4 -mx-4 border-green-700 font-bold rounded-lg py-1 px-[130px] text-[13px]">
									CLINICAL ORDER</h2>
							</div>

							<div class=" -mt-1 mx-16 flex">
								<img src="../assets/images/medkollate logo 3.png" alt="" class="card w-44 ">
							</div>
						</div>
					</section>

					<section class="absolute flex justify-around">
						<div class="mx-[40px] ">
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
									class="border-2 rounded-full border-green-400  text-green-400" width="50"
									height="50">
									<path fill="none" d="M0 0H24V24H0z" />
									<path
										d="M8 3v2H6v4c0 2.21 1.79 4 4 4s4-1.79 4-4V5h-2V3h3c.552 0 1 .448 1 1v5c0 2.973-2.162 5.44-5 5.917V16.5c0 1.933 1.567 3.5 3.5 3.5 1.497 0 2.775-.94 3.275-2.263C16.728 17.27 16 16.22 16 15c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.371-.92 2.527-2.176 2.885C19.21 20.252 17.059 22 14.5 22 11.462 22 9 19.538 9 16.5v-1.583C6.162 14.441 4 11.973 4 9V4c0-.552.448-1 1-1h3zm11 11c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" />
								</svg>
								<p class="mt-1 -mx-1 font-bold text-xs">DRUGS</p>
							</button>

						</div>

						<div class=" mx-[40px] ">
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50"
									class="border-2 rounded-full px-1 border-blue-400  text-blue-400" height="50">
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zm-2 3V4H4v15a1 1 0 0 0 1 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z" />
								</svg>
								<p class="mt-1 -mx-1 font-bold text-xs">VACCINATION</p>
							</button>

						</div>

						<div class=" mx-[40px]">
							<button>
								<svg width="50px" height="50px" viewBox="0 0 15 15" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z"
										fill="currentColor" />
								</svg>
								<p class="mt-1 -mx-1 font-bold text-xs">RADIOLOGY</p>
							</button>
						</div>

						<div class="-mt-4 mx-4 ">
							<button>
								<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									viewBox="0 0 144.773 144.773" style="enable-background:new 0 0 144.773 144.773;"
									xml:space="preserve">
									<g>
										<circle style="fill:#FC611F;" cx="72.387" cy="72.386" r="72.386" />
										<g>
											<defs>
												<circle id="SVGID_1_" cx="72.387" cy="72.386" r="72.386" />
											</defs>
											<clipPath id="SVGID_2_">
												<use xlink:href="#SVGID_1_" style="overflow:visible;" />
											</clipPath>
											<g style="clip-path:url(#SVGID_2_);">
												<path style="fill:#A25A34;" d="M59.141,98.774h25.219c0,0,12.947-12.774,12.447-29.35s-16.334-26.742-30.5-26.742
								C52.141,42.683,41.641,77.533,59.141,98.774z" />
												<path style="fill:#F1C9A5;" d="M107.053,116.94c-4.666-8.833-34.666-14.376-34.666-14.376s-30,5.543-34.666,14.376
								c-3.449,12.258-6.334,27.833-6.334,27.833h41h41C113.387,144.773,111.438,128.073,107.053,116.94z" />
												<path style="fill:#E4B692;" d="M72.387,102.564c0,0,30,5.543,34.666,14.376c4.386,11.133,6.334,27.833,6.334,27.833h-41V102.564z
							" />
												<rect x="64.22" y="84.606" style="fill:#F1C9A5;" width="16.334"
													height="27.336" />
												<rect x="72.387" y="84.606" style="fill:#E4B692;" width="8.167"
													height="27.336" />
												<path style="opacity:0.1;fill:#DDAC8C;" d="M64.22,97.273c1.469,4.217,7.397,6.634,11.751,6.634c1.575,0,3.107-0.264,4.583-0.747
							V84.606H64.22V97.273z" />
												<path style="fill:#F1C9A5;" d="M93.387,67.357c0-17.074-9.402-26.783-21-26.783c-11.598,0-21,9.709-21,26.783
							s9.402,30.917,21,30.917C83.984,98.274,93.387,84.432,93.387,67.357z" />
												<path style="fill:#E4B692;" d="M90.19,79.195c-3.807-0.424-6.377-4.783-5.732-9.732c0.637-4.953,4.242-8.63,8.051-8.209
							c3.805,0.422,6.371,4.779,5.729,9.732C97.599,75.939,93.997,79.613,90.19,79.195z" />
												<path style="fill:#F1C9A5;" d="M46.685,70.986c-0.643-4.953,1.924-9.31,5.727-9.732c3.81-0.421,7.416,3.256,8.055,8.209
							c0.643,4.949-1.93,9.309-5.734,9.732C50.925,79.613,47.323,75.939,46.685,70.986z" />
												<path style="fill:#E4B692;" d="M93.387,67.357c0-17.074-9.402-26.783-21-26.783v57.7C83.984,98.274,93.387,84.432,93.387,67.357z
							" />
												<path style="fill:#01561E;" d="M107.053,116.94c-0.278-0.527-0.652-1.043-1.101-1.547c-5.091,6.702-18.195,11.474-33.564,11.474
							h-0.001l0,0c-0.001,0-0.001,0-0.001,0c-15.369,0-28.474-4.771-33.565-11.473c-0.447,0.503-0.821,1.019-1.1,1.546
							c-3.449,12.258-6.334,27.833-6.334,27.833h41h41C113.387,144.773,111.438,128.073,107.053,116.94z" />
												<path style="fill:#D1874A;" d="M63.611,49.212c3.486,6.291,12.223,9.875,18.526,14.601c11.036,8.274,6.048,26.568,2.222,34.962
							c13.868-8.061,24.036-21.585,18.934-43.5c-5.102-21.916-22.517-31.241-40.532-23.47C47.936,27.918,32.72,50.431,34.474,70.793
							c1.753,20.36,24.667,27.981,24.667,27.981S45.474,68.441,63.611,49.212z" />
											</g>
										</g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
								</svg>
								<div class="text-[9px] font-semibold">
									<p>Ayo Kitan</p>
									<p>22 years old</p>
								</div>
							</button>
						</div>
					</section>

					<section>
						<div>
							<button
								class="border-2 border-green-600 px-7 py-1 rounded-lg -mx-[190px] mt-[70px] text-lg text-green-400 font-bold hover:bg-black hover:text-white hover:border-white"
								@click="newInputBox($event)">Add</button>

							<div class="-mx-40">
								<div class="block py-5">
									<label class="new absolute  mt-1 text-sm font-semibold">NOTES</label>
									<textarea type="text" placeholder="Write notes here"
										class="outline-none border-2 py-5 px-3 rounded w-[600px] h-[220px] border-l-green-800 border-l-[12px] border-t-[30px] border-t-green-300 font-semibold "
										v-model="firstInputBox"></textarea>
								</div>

								<div class="block py-5">
									<textarea type="text" placeholder="Write notes here"
										class="outline-none border-2 py-5 px-3 rounded-md w-[600px] h-[220px]  font-semibold "
										v-model="secondInputBox"></textarea>
								</div>

								<div>
									<button
										class=" px-9 py-0 mb-[20px] text-black rounded-md font-semibold border-2 border-black font-semibold hover:bg-black hover:text-white">
										Prescribe drugs
									</button>

									<button
										class="absolute bg-green-700 px-12 py-1 mb-[20px] text-white rounded-md font-semibold mx-[272px] hover:bg-black hover:text-white -mt[40px]">
										Next
									</button>
								</div>
							</div>
						</div>
					</section>
				</div>

			</div>

		</section>
	</div>
</template>



<style scoped>
.new {
	margin-left: 285px;
}

@media only screen and (min-width: 295px) {
	label {
		margin-left: 145px;
	}
}


@media only screen and (max-width: 285px) {
	label {
		margin-left: 78px;
	}

	.image {
		margin-left: 60px;
		width: 210px;
	}
}

@media only screen and (min-width: 530px) {
	label {
		margin-left: 195px;
	}
}

@media only screen and (max-width: 1025px) {
	.text {
		font-size: 12px;
		padding-left: 65px;
	}

	.board {
		margin-left: -40px;
	}

	.scale {
		margin-left: -30px;
	}
}
</style>

<script setup>
import { ref } from "vue"

const firstInputBox = ref("")
const secondInputBox = ref(" ")
const inputArray = ref([])

const confirmInput1 = () => {
	let totalInput = {
		firstInput: firstInputBox.value,
		secondInput: secondInputBox.value
	}
	console.log("totalInput >>", totalInput)
}

const newInputBox = (event) => {
	let newBox = document.getElementById("newBox");
	console.log(event.target.value)
}

</script>