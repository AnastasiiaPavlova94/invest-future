<template>
<div class="container">
		<h2>blog posts</h2>
	
	<pagination-blok :page="page" :total="totalPages" @toPage="goToPageFetch" />
	
	<div class="blog">
		<div class="blog_post" v-for="(item, index) in NewsData" :key="index">
		<div class="img">
			<router-link :to="{name: 'BlogCard', params:{title: item.title }}" class="linkTitle">
				<img class="img_anim" :src="item.urlToImage" alt="post1" @error="errorImg" />
			</router-link>
		</div>
		<div class="blog_post_content">
			<h5 >{{newDataFormated}}</h5>
				<router-link :to="{name: 'BlogCard', params:{title: item.title }}">
					<h4>{{ item.title }}</h4>
				</router-link>
			<p v-html="item.description"></p>
				
			
		</div>
		<router-link :to="{name: 'BlogCard', params:{title: item.title }}">
					<span>Read More</span>
				</router-link>
		</div>
	</div>
</div>
</template>

<script>
import axios from "axios";
import PaginationBlok from './PaginationBlok.vue';
export default {
  components: { PaginationBlok },
name: "AllBlog",
data() {
	return {
	NewsData: [],
	page: 1,
	total: 0,
	pageSize: 9
	};
},
computed: {
	newDataFormated() {
	const d = new Date()
	let month = d.getMonth() + 1
	let day = d.getDate()  -1 // -1 для показа новостей за 1 день, а не за текущий
	return (
		d.getFullYear() +
		"-" +
		(month < 10 ? "0" + month : month) +
		"-" +
		(day < 10 ? "0" + day : day)
	)
	},
	totalPages(){
		const pages = Math.ceil(this.NewsData.totalResults / this.pageSize)
		const maxPage = Math.ceil(99 / this.pageSize)
		return this.NewsData.totalResults < 99 ? pages : maxPage
	}
},
created() {
	this.fetchData();
},
methods: {
	fetchData() {
	let url = 'https://newsapi.org/v2/everything?q=Interior-Design&sortBy=Design&apiKey=4364238301bb4d329a06c6ae22a91354'
	url += '&from=' + this.newDataFormated
	url += '&to=' + this.newDataFormated
	url += '&language=en'
	url += '&pageSize=' + this.pageSize
	url += '&page=' + this.page
	
	axios
		.get(url)
		.then((resp) => {
			this.NewsData = resp.data.articles
	})
	},
	goToPageFetch(p){
		this.page = p
		this.fetchData()	
	},
	errorImg(e){
		e.target.src = require('@/assets/img/plaseholder.png')
	}
}
}
</script>


<style lang="scss" scoped>
h2{
	text-align: center;
	padding: 70px 0;
	&::after{
		display: none;
	}
}
</style>
