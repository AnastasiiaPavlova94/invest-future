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

<style lang="scss">
.services{
	display: grid;
	grid-template-columns: 500px 1fr;
	gap: 142px;
	margin-top: 100px;
	h2{
		margin-bottom: 34px;
	}
	&_blok{
		display: grid;
		grid-template-columns: repeat(2, 1fr) ;
		grid-template-rows: repeat(2, 1fr);
		gap: 52px;
		.card{
			box-shadow: 0 0 20px 10px rgba(209, 209, 209, 0.333);
			border: 1px solid #F9F9F9;
			padding: 50px 63px;
		}
	}
}
</style>