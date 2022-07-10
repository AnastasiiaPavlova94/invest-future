<template>
	<section> 
		<div class="container">
			<div class="clients">
					<div class="counter">
						<div class="counter_item" v-for="(cnt, index) in CountertServData" :key="index">

							<!-- <template>
								<animated-number
									:value="value"
									:formatValue="formatToPrice"
									:duration="ctn.counter"
								/>
							</template> -->
						<h5>{{ cnt.counter }}</h5>
						<span>{{ cnt.type }}</span>
						</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from "axios";
// import AnimatedNumber from "animated-number-vue";
// components: {
// 		AnimatedNumber
// 		},

export default {
	name: "CountertServ",
	data() {
		return {
		CountertServData: [],
		value: 1000,
		};
	},
	created() {
		axios
		.get("../data/counter.json").then((resp) => {
			this.CountertServData = resp.data;
		});
	},
	methods: {
		formatToPrice(value) {
		return `<h5> ${value.toFixed(2)} </h5>`;
		}
	}
};
</script>








