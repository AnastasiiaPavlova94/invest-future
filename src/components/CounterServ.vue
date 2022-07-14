<template>
	<section id="counter-section">
		<div class="container">
			<div class="clients">
					<div class="counter">
						<div class="counter_item" v-for="(cnt, index) in CountertServData" :key="index"  > 
							<h5>
								<vue3-autocounter :ref='`counter${index+1}`' :startAmount='0' :endAmount='cnt.counter' :duration='3' separator=',' decimalSeparator='.' :decimals='0' :autoinit='false'/>
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
	computed:{
		numberOfset(){
			return document.getElementById('counter-section').offsetTop - window.outerHeight + 50
		}
	},
	created() {
		axios
		.get("../data/counter.json").then((resp) => {
			this.CountertServData = resp.data;

		});
		window.addEventListener('scroll', this.checkStartCounter)
	},
	methods: {
		checkStartCounter(){
				if(window.scrollY > this.numberOfset){
					this.start()
					window.removeEventListener('scroll', this.checkStartCounter)
				}
		},
		start() {
			for(let c in this.$refs){
				this.$refs[c][0].start();
			}
		}
	},
};
</script>


<style lang="scss" scoped>

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
				text-transform: capitalize;
				color: #DEDEDE;
				padding-right: 8px;
				display: inline-block;
				flex-basis: 25%;
			}
			span{
				line-height: 212.4%;
				text-transform: uppercase;
				color: #5B5B5B;
				padding-bottom: 25px;
			}
		}
	}
}
@media screen and (max-width: 1500px){
.clients .counter_item h5 {
	font-size: 6rem;
	}
}
@media screen and (max-width: 900px){
.clients .counter_item {
	align-items: center;
	flex-direction: column;
	}
}
@media screen and (max-width: 760px){
.clients{
	.counter {
		display: grid;
		grid-template-columns: 1fr;
		margin-bottom: 60px;
		}
	}
}
</style>







