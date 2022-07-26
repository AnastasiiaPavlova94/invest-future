<template>
<div id="invest">
	<div class="slider" v-if="HomeSliderData!==null">
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
		HomeSliderData: null,
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
		.get("data/famosebild.json").then((resp) => {
			this.HomeSliderData = resp.data;
			this.pageTo = this.HomeSliderData.length
			console.log(this.pageTo)
		});
		
	}
};
</script>


<style lang="scss" >

$font_Rubik: 'Rubik';
$font_Prata: 'Prata';


#invest{
margin-left: 65px;
height: 100vh;
margin-bottom: 100px;
font-family: $font_Prata;
.slider{
		position: relative;
		z-index: 11;
		h1{
		
		font-size: 90px;
		font-style: normal;
		font-weight: 400;
		line-height: 110%;
		padding: 228px 0 72px 40px;
		text-transform: capitalize;
		width: 670px;
		color: #201F1F;
		}
		p{
		font-size: 19px;
		line-height: 225.9%;
		letter-spacing: 0.02em;
		color: #888888;
		padding: 45px 40px;
		}
		&_item{
				
				display: grid;
				gap: 131px;
				grid-template-columns: 3fr 1fr;
				background: rgba(255, 255, 255, 1);
				align-items: center;
				
		}
}
.carousel__slide {
	flex-direction: column;
	text-align: left;
	position: relative;
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
	left: -145px;
	transform: translate(50%, -50%);
}
.carousel__prev {
	top: 82%;
	left: -86px;
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
.carousel__pagination {
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 45%;
	left: -106px;
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
	background-color: transparent;
}
.carousel__pagination li button.carousel__pagination-button--active{
	&::before {
		color: #91795C;
	}
}
}
@media screen and (max-width: 1150px) {
	#invest .carousel  .slider_item {
		gap: 0px;
	}
}
@media screen and (max-width: 1100px) {
#invest{
	.slider{
		h1{
		font-size: 60px;
		}
	}
}
#invest .slider p {
font-size: 1rem;
}
	.carousel__prev {
	top: 79%;
	left: -55px;
	}
	.carousel__next {
	top: 90%;
	left: -114px;
	}
	.carousel__pagination {
	top: 45%;
	left: -72px;
	}
}

@media screen and (max-width: 900px) {
#invest{
	.slider{
		h1{
		font-size: 40px;
		width: auto;
		}
	}
}
		#invest .carousel .slider_item {
			display: grid;
			grid-template-columns: 1fr;
			justify-items: center;
		}
}
@media screen and (max-width: 600px) {
	#invest .slider h1 {
		font-size: 2rem;
		padding: 120px 0 17px 0px;
	}
	#invest .slider p {
    font-size: 1rem;
    padding: 45px 0px;
	}
	#invest {
		height: auto;
	}
	#invest .carousel__prev {
	top: 69%;
	left: -50px;
	}
	#invest.car ousel__next {
	top: 80%;
	}
	.carousel__pagination {
	top: 35%;
	}
}
@media screen and (max-width: 400px){
	#invest .slider h1 {
		padding: 46px 0 17px 0px;
	}
	.carousel__prev {
	top: 59%;
	}
	.carousel__next {
	top: 70%;
	}
	.carousel__pagination {
	top: 25%;
	}
}
</style>


