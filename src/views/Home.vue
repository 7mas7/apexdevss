<template>
	<div id="home">
		<div class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">

		  <button
		    class="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative"
		  >
		  	Social
		  </button>

		  <button
		    class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
		  >
		  	Business
		  </button>
		  <button
		    class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
		  >
		  	Free
		  </button>		  
		</div>
		<h1 class="font-semibold mt-2 text-2xl">-Social & Growth Apps</h1>
		<section id="apps-section">
			<router-link to="/igbooster" class="product-card
			w-60 inline-block
			bg-[#eee] shadow
			cursor-pointer rounded
			p-2"
			href="#">
				<img src="../assets/igbooster.webp"
				class="w-full">
				<h4>-IG Booster</h4>
				<p class="text-secondary"><ion-icon name="alert-outline"></ion-icon>Increase instagram followers and likes.</p>
				<span class="font-semibold">EGP <span class="text-2xl">50</span></span>
			</router-link>
		</section>
	</div>
</template>