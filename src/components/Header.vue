<template>
	<header class="p-5 m-2 relative border bg-white rounded">
		<div class="header-bg bg-primary blur-3xl left-[5%] w-[90%] absolute block h-full"></div>
		<div class="header relative left-0 z-10 w-full
		flex items-center justify-center
		flex-col bg-[#fdfdfd70] p-4">
		<div class="flex items-center justify-between w-full">
			<div class="flex gap-3">
				<a href="#">
					<span>
						<ion-icon name="logo-whatsapp"></ion-icon>
					</span>
				</a>
				<a href="#">
					<span>
						<ion-icon name="logo-instagram"></ion-icon>
					</span>
				</a>
			</div>
			<div class="flex gap-3">
				<a href="#">
					<span>
						<ion-icon name="logo-github"></ion-icon>
					</span>
				</a>
			</div>			
		</div>
			<div class="flex items-center justify-center w-full">
				<img src="../assets/logo.jpg"
				width="100" class="rounded-[50%] h-24">
			</div>
			<h1 class="font-bold text-center text-2xl">Apex Devs</h1>
			<p class="text-center text-secondary ">Sell And Develop Applictaions</p>
			<form id="search-form"
			class="flex items-center justify-center
			w-[80%] lg:w-[40%] bg-white rounded">
				<div class="shadow flex p-1 pb-2 items-center justify-center rounded
				mt-2 w-full">
					<span
					class="block rounded w-10 items-center justify-center flex
					text-secondary">
						<ion-icon name="search-outline"></ion-icon>
					</span>
					<input type="text" placeholder="Search For Product."
					class="outline-none w-full">
				</div>
			</form>
		</div>
	</header>
</template>