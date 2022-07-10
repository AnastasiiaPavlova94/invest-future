<template>
	<section>
	<div class="container">
	<div class="services" id="sr">
		<div>
		<h2>Vuiws my services</h2>
		<p>
			Id at urna non viverra eu volutpat porttitor elementum. Viverra
			senectus dui ultricies dolor. Varius nibh velit pellentesque sapien,
			sapien neque dignissim.
		</p>
		</div>
		<div class="services_blok" >
		<div class="card" v-for="(serv, index) in AboutServData" :key="index">
			<h4>{{ serv.title }}</h4>
			<p>{{ serv.text }}</p>
		</div>
		</div>
	</div>
	</div>
</section>
</template>


<script>
import axios from "axios";
export default {
	name: "AboutServ",
	data() {
		return {
		AboutServData: [],
		};
	},
	created() {
		axios
		.get("../data/abautserv.json").then((resp) => {
			this.AboutServData = resp.data;
		});
	},
};
</script>