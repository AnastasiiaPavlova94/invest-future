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
		CountertServData: null,
		};
	},
	computed:{
		numberOfset(){
			return document.getElementById('counter-section').offsetTop - window.outerHeight + 50
		}
	},
	created() {
		axios
		.get("data/counter.json").then((resp) => {
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

$font_Prata: 'Prata';

.clients{
	padding-bottom: 197px;
	padding-top: 250px;
	.counter{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		&_item{
			display: flex;
			justify-content: center;
			align-items: flex-end;
			gap: 20px;
			h5{
				// width: 200px;
				// padding: 10px;
				span{
				font-family: $font_Prata;
				font-size: 120px;
				line-height: 129.4%;
				text-transform: capitalize;
				color: #DEDEDE;
				padding-right: 8px;
				display: inline-block;
				flex-basis: 25%;
				width: 150px;
				transform: 1s all solid;
				}
			} 
			span{
				line-height: 212.4%;
				text-transform: uppercase;
				color: #5B5B5B;
				padding-bottom: 25px;
				position: sticky;
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
		padding-bottom: 50px;
		padding-top: 50px;
		.counter {
			display: grid;
			grid-template-columns: 1fr;
			margin-bottom: 60px;
			}
		}
}

</style>







