<template>
<section id="comment_block" v-if="CommentServData!==null">
	<div class="container">
	<div class="clients">
		<div class="comment">
		<img src="../assets/img/Rectangle_sect5.jpg" alt="cmentImg" />
		<div class="comment_item">
			<h2>what clients says</h2>
			<svg
			width="196"
			height="137"
			viewBox="0 0 147 127"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			>
			<path
				d="M147 0.399988V23.2C135 25.2 126.6 29.4 121.8 35.8C117 42.2 114.6 53.6 114.6 70H145.2V127H86.4V79C86.4 54.2 91 35 100.2 21.4C109.4 7.39998 125 0.399988 147 0.399988ZM60.6 0.399988V23.2C48.6 25.2 40.2 29.4 35.4 35.8C30.6 42.2 28.2 53.6 28.2 70H58.8V127H1.78814e-07V79C1.78814e-07 54.2 4.6 35 13.8 21.4C23 7.39998 38.6 0.399988 60.6 0.399988Z"
				fill="#F5F5F5"
			/>
			</svg>
			<Carousel :autoplay="4000" >
				<Slide v-for="slide in CommentServData" :key="slide">
				<div class="carousel__item">
								<p>
									{{ slide.comment }}
								</p>
								<h4>{{ slide.name }}</h4>
								<span>{{ slide.position }}</span>
				</div>
				</Slide>
				<template #addons>
				<Pagination />
				</template>
			</Carousel>
			</div>
		
		</div>
	</div>
	</div>
</section>
</template>

<script>
import axios from "axios";
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
	name: "CommentServ",
	components: {
		Carousel,
		Slide,
		Pagination,
	},
	data() {
		return {
		CommentServData: null,
		settings: {
		itemsToShow: 1,
		snapAlign: 'left',
			}
		}
	},
		created() {
			axios.get("data/comment.json").then((resp) => {
			this.CommentServData = resp.data;
			});
		},
};
</script>

<style lang="scss">

.clients {
	.comment{
		display: grid;
		grid-template-columns: 70% 30%;
		img {
			height: 870px;
			max-width: 1100px;
			position: relative;
			top: 0;
			right: 146px;
		}
		&_item{
			display: grid;
			padding: 119px 10px 40px 160px;
			background-color: #ffffff;
			position: relative;
			right: 501px;
			top: 100px;
			width: 500px;
			svg{
				margin-top: 42px;
				margin-left: -28px;
			}
			p{
				//width: 604px;
				padding-bottom: 33px;
				font-weight: 300;
				font-size: 22px;
				line-height: 222.4%;
				color: #5B5B5B;
			}
			h4{
				font-weight: 500;
				font-size: 26px;
				line-height: 212.4%;
				text-transform: capitalize;
				color: #363535;
			}
			span{
				line-height: 212.4%;
				text-transform: capitalize;
				color: #818181;
			}
			
		}
	}
	
}
#comment_block{
	.carousel__pagination-button{
				width: 10px;
				height: 10px;
				margin: 0px;
				padding: 0px;
				margin-right: 18px;
				border-radius: 0px;
				background: #E1E1E1;
				&::before{
					display: none;
				}
					&--active{
						background: #91795C;
					}
				}
	.carousel__item{
		text-align: left;
		position: relative;
		
	}
	.carousel__pagination {
		display: flex;
		flex-direction: row;
		position: absolute;
		top: 63%;
		left: -3px;
	}
}

@media screen and (max-width: 900px){
	.clients .comment{
		svg {
			height: 80px;
			width: 100px;
			margin-left: 3px;
			}
	}
	.clients img {
		display: none;
	}
	.clients .comment {
		grid-template-columns: 1fr;
		
	}
	.clients .comment_item {
    padding: 40px;
	}
	.clients .comment_item{
		left: 0;
	}
}
@media screen and (max-width: 780px){	
	#comment_block .carousel__pagination {
	top: 70%;
	}
}
@media screen and (max-width: 580px){
	.clients .comment_item {
		width: 300px;
	}
	.clients .comment_item {
		h5 {
			font-size: 3,5rem;
		}
	}
	#comment_block .carousel__pagination {
	top: 76%;
	}
	.clients{
		.comment_item {
			h5 {
			font-size: 4rem;
			}	
		}
	}
}
@media screen  and (max-width: 400px) {
	.clients .comment_item p {
		font-size: 14px;
	}
	.clients .comment_item {
		padding: 4px;
	}
	#comment_block .carousel__pagination {
		top: 61%;
	}
}
</style>
