<template>
	<div class="slider home">
	<carousel :items-to-show="1" :wrap-around="true">
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
		
	}
};
</script>


<style lang="scss" >
$font_Rubik: 'Rubik';
.carousel__slide {
	flex-direction: column;
	text-align: left;
}
.carousel__slide {
	align-items: flex-start;
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
	top: 16px;
	transform: rotate(40deg);
}
.carousel__next::before{
	transform: rotate(222deg);
	left: 15px;
}
.carousel__next {
	top: 90%;
	left: -233px;
	transform: translate(50%, -50%);
}
.carousel__prev {
	top: 82%;
	left: -175px;
	transform: translate(-50%, -50%);
}
.carousel__prev,
.carousel__next {
	background: rgba(255, 255, 255, 0);
	border: 2px solid #CFCFCF;
	border-radius: 30px;
	display: block;
	width: 59px;
	height: 55px;
	padding: 10px;
	&:hover{
			border: 2px solid #515050;
			&::before{
				border-bottom: 2px solid #515050;
				border-left: 2px solid #515050;
		}
		}
}
// .carousel__next--in-active,
// .carousel__prev--in-active{
// 		border: 2px solid #515050;
// 		&:hover{
// 			border: 2px solid #515050;
// 		}
// 		&::before{
// 				border-bottom: 2px solid #515050;
// 				border-left: 2px solid #515050;
// 		}
// }

.carousel__pagination {
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 45%;
	left: -190px;
}
.carousel__pagination{
	counter-reset: mycount;
	li{
	counter-increment: mycount;
		button{
			width: 26px;
			height: 26px;
			position: relative;
			margin-bottom: 26px;
			&::before{
				font-family: $font_Rubik;
				content: '0'counter(mycount);
				display: inlin-blok;
				color: #CFCFCF;
				width: 10px;
				height: 10px;
			}
		}
	}
}
.carousel__pagination-button {
	background-color: #cfcfcf00;
}
.carousel__pagination-button--active{
	.carousel__pagination li button::before {
		color: #91795C;
	}
}
.carousel__pagination-button--active{
	&::before {
		color: red;
	}
}
@media screen and (max-width: 1750px) {
	.carousel__pagination {
		left: -59px;
	}
	.carousel__prev {
		left: -40px;
	}
	.carousel__next {
		left: -102px;
	}
}
@media screen and (max-width: 1100px) {
	.carousel__track {
		h1 {
			font-size: 3.625rem;
			padding: 180px 0 72px 40px;
			width: 452px;
		}
			p {
			padding: 17px 17px;
		}
	}
	.carousel__next{
		.slider_item {
			width: 100vh;
			gap: 10px;
		}
	}
	
}
@media screen and (max-width: 950px) {
	.carousel__track {
		h1 {
		font-size: 3.625rem;
		padding: 198px 0 42px 40px;
		width: 388px;
		}
		p{
			font-size: 1.5rem;
		}
	}
}
@media screen and (max-width: 760px) {
	.carousel__track h1 {
		font-size: 3.625rem;
		padding: 180px 0 32px 15px;
	}
}
@media screen and (max-width: 600px) {
	.carousel__track h1 {
		padding: 180px 0 72px 40px;
		font-size: 2rem;
		width: 205px;
	}
}
</style>


