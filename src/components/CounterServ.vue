<template>
	<section>
		<div class="container">
			<div class="clients">
					<div class="counter">
						<div class="counter_item" v-for="(cnt, index) in CountertServData" :key="index"  > 
							<h5>
								<vue3-autocounter ref='counter' :startAmount='0' :endAmount='cnt.counter' :duration='3' separator=',' decimalSeparator='.' :decimals='0' :autoinit='true'/>
							</h5>
						<span>{{ cnt.type }}</span>
						</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from "axios";
import Vue3Autocounter from 'vue3-autocounter';
export default {
	name: "CountertServ",
	components: {
		Vue3Autocounter,
	},
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
	}
};
</script>








