<template>
	<div class="container">
		<router-link to="/all-blog" class="blg_btn">
			<span class="come_back">← All blogs</span>
		</router-link>
		<h1>{{item.title}}</h1>
			<div class="news">
				<div class="news_content">
					<h3 v-html="item.description"></h3>
						<!-- <a :href="item.url" target="_blank" rel="nofollow, noreferrer">Full information</a> -->
				</div>
				<img :src="item.img" alt="post1" />
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			item: {}
		}
	}
}
</script>

<style lang="scss">

	h1{
	font-size: 3rem;
	width: 800px;
	text-align: center;
	margin: 70px auto;
	}
	.news{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		padding-bottom: 50px;
		gap: 30px;
		&_content{
			margin: auto;
			position: relative;
		}
		h5{
			position: absolute;
			right: 10px;
			color: #818181;
			}
			a{
			font-size: 1.7rem;
			font-style: italic;
			line-height: 200.9%;
			-webkit-text-decoration-line: underline;
			text-decoration-line: underline;
			color: #91795C;
			&:hover{
				color: #424242;
			}
			}
		img{
			box-shadow: 0 0 40px #909090;
		}
	}
	.come_back{
		font-style: italic;
		font-weight: 400;
		font-size: 0.875rem;
		line-height: 200.9%;
		-webkit-text-decoration-line: underline;
		text-decoration-line: underline;
		color: #424242;
		position: relative;
		top: 40px;
		&:hover{
			color: #91795C;
		}
	}
@media screen and (max-width: 850px) {
	h1 {
    font-size: 2rem;
    width: auto;
    text-align: center;
	margin: 70px 0 30px 0;
	}
}
@media screen and (max-width: 750px) {
	.news {
	grid-template-columns: 1fr;
		a {
		font-size: 1rem;
		}
	}
}
</style>