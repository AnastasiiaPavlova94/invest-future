<template>
	<section> 
		<div class="container">
			<div class="clients">
					<div class="counter">
						<div class="counter_item" v-for="(cnt, index) in CountertServData" :key="index">
							<!-- <h5></h5> -->
							<number
								ref="number1"
								:from="100"
								:to="cnt.counter"
								:format="theFormat"
								easing="Power1.easeOut"/>
						<span>{{ cnt.type }}</span>
						</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from "axios";



export default {
	name: "CountertServ",
	data() {
		return {
		CountertServData: [],
		};
	},
	created() {
		axios
		.get("../data/counter.json").then((resp) => {
			this.CountertServData = resp.data;
		});
	},
	methods: {
		theFormat(number) {
            return number.toFixed(2);
        },
        completed() {
            console.log('Animation ends!');
        },
        playAnimation() {
            this.$refs.number2.play()
        }
	}
};
</script>








