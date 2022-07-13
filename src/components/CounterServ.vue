<template>
	<section>
		<div class="container">
			<div class="clients">
					<div class="counter">
						<div class="counter_item" v-for="(cnt, index) in CountertServData" :key="index"  > 
							<h5>
								<vue3-autocounter ref='counter' :startAmount='0' :endAmount='cnt.counter' :duration='3' separator=',' decimalSeparator='.' :decimals='0' :autoinit='autoinit'/>
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
		autoinit: true,
		ifFixsed: false,
		};
	},
	watch() {
		if(window.scrollY > 100){
			//	this.autoinit = true
				this.start()	
		}
	},
	created() {
		axios
		.get("../data/counter.json").then((resp) => {
			this.CountertServData = resp.data;

		});
	},
	methods: {
		start() {
			this.$refs.counter.start();
		}
	},
};
</script>


<style lang="scss">
$base_fz: 16;
$font_Prata: 'Prata';
$color_blue: #5474FD;
@mixin fz($size_in_px){
	font-size:($size_in_px/$base_fz)+rem;
}
.clients{
	margin-bottom: 250px;
	margin-top: 240px;
	.counter{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin-bottom: 220px;
		&_item{
			display: flex;
			justify-content: center;
			align-items: flex-end;
			h5 span{
				font-family: $font_Prata;
				@include fz(120);
				line-height: 129.4%;
				letter-spacing: -0.02em;
				text-transform: capitalize;
				color: #DEDEDE;
				padding-right: 8px;
			}
			span{
				line-height: 212.4%;
				letter-spacing: 0.02em;
				text-transform: uppercase;
				color: #5B5B5B;
				padding-bottom: 25px;
			}
		}
	}
}

</style>







