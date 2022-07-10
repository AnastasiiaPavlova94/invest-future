<template>
	<div class="slider">
		<h1>Invest in your Future, Invest with us</h1>
		<div class="slider_item" v-for="(dis, index) in HomeSliderData" :key="index">
			<p>
				{{ dis.description }}
			</p>
			<router-link to="/service-section">
				<button class="btn">
				View Project <span class="icon-long-arrow-right"></span>
				</button>
			</router-link>
		</div>
	</div>
</template>

<script>



import axios from "axios";
export default {
	name: "HomeSlider",
	data() {
		return {
		HomeSliderData: [],
		value: 1000,
		};
	},
	created() {
		axios
		.get("../data/famosebild.json").then((resp) => {
			this.HomeSliderData = resp.data;
		});
	},
};
</script>