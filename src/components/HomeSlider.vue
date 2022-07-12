<template>
	<div class="slider">
    
	<carousel :items-to-show="1" >
		<slide v-for="slide in HomeSliderData" :key="slide">
			
				<h1>Invest in your Future, Invest with us</h1>
				<div class="slider_item">
					<p>
						{{ slide.description }}
					</p>
					<router-link to="/service-section">
						<button class="btn">
						View Project <span class="icon-long-arrow-right"></span>
						</button>
					</router-link>
				</div>
			
		</slide>
		<template #addons>
		<navigation />
		<!-- <ul class="pagination">
		<li v-for="p in pageTo" :key="p"  >
		<button @:click="GoTo(p)" :class="{active: p===page}">0{{ p }}</button>
		</li>
		</ul>  -->
		<pagination></pagination>
		</template>
  </carousel>


		
	</div>
</template>

<script>


import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import axios from "axios";
export default {
	name: "HomeSlider",
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
		
	},
	data() {
		return {
		HomeSliderData: [],
		count: 1,
		page:1,
		pageTo: 0,
		value: 1000,
		settings: {
			itemsToShow: 1,
			snapAlign: 'center',
			wrapAround: true,
			}
		}
	},
	created() {
		axios
		.get("../data/famosebild.json").then((resp) => {
			this.HomeSliderData = resp.data;
			this.pageTo = this.HomeSliderData.length
			console.log(this.pageTo)
		});
		
	},
	methods: {
		GoTo(p){	
			console.log(p)
		}
	}
};
</script>


<style>
.pagination{
	display: flex;
	display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: -180px;
}
.pagination ul li{
	display: flex;
	display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: -180px;
}
.carousel__pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    opacity: 1;
}

.carousel__pagination {
    display: flex;
    flex-direction: column;
	position: absolute;
	top: 50%;
	left: -187px;
	gap: 26px;
}
.carousel__pagination-button {
  
    width: var(--vc-pgn-width);
    height: var(--vc-pgn-height);
    border-radius: var(--vc-pgn-height);
    border: 0;
    cursor: pointer;
    background-color: var(--vc-pgn-background-color);
}
.carousel__slide {

    align-items: flex-start;
}
.invest .slider h1 {
	text-align: left;
}
.carousel__prev {
	position: relative;	
}
.carousel__prev svg{
	display: none;
}
.carousel__next svg{
	display: none;
}
.carousel__prev::before,
.carousel__next::before{
	content: '';
	border-bottom: 2px solid #CFCFCF;
	border-left: 2px solid #CFCFCF;
	display: block;
	width: 18px;
	height: 18px;
	position: absolute;
	left: 22px;
	top: 20px;
	transform: rotate(40deg);
}

.carousel__prev::after,
.carousel__next::after{
	content: '';
	background: rgba(255, 255, 255, 0);
	border: 2px solid #CFCFCF;
	border-radius: 59px;
	display: block;
	width: 59px;
	height: 55px;
	transform: rotate(40deg);
}
.carousel__next::before{
	transform: rotate(222deg);
	left: 15px;
}
.carousel__next {
    top: 90%;
    left: -240px;
    transform: translate(50%, -50%);
}
.carousel__prev {
    top: 82%;
    left: -175px;
    transform: translate(-50%, -50%);
}
.carousel__prev, .carousel__next {
    background-color: rgb(255, 255, 255);
	width: 59px;
	height: 59px;
    display: flex;	
    justify-content: center;
    align-items: center;
    position: absolute;
}
.carousel__prev:hover .carousel__next::before{
		background: rgba(87, 36, 36, 0);
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
  flex-direction: column;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>

