<template>
<div class="container">
		<h2>blog posts</h2>
	
	<pagination-blok :page="page" :total="totalPages" @toPage="goToPageFetch" />
	
	<div class="blog" v-if="NewsData!==null">
		<div class="blog_post" v-for="(item, index) in NewsData" :key="index">
			<router-link :to="{name: 'BlogCard', params:{title: item.title }}"></router-link>
				<div class="img">
						<img  v-if="item.urlToImage!==null" class="img_anim" :src="item.urlToImage" alt="post1" @error="errorImg" />
						<img  v-else class="img_anim" :src="require('@/assets/img/plaseholder.png')" alt="post1" />
				</div>
				<div class="blog_post_content">
					<h5 >{{newDataFormated}}</h5>
							<h4>{{ item.title }}</h4>
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
import PaginationBlok from '../PaginationBlok.vue';
export default {
  components: { PaginationBlok },
name: "AllBlog",
data() {
	return {
	NewsData: null,
	page: 1,
	total: 0,
	totalResults: 0,
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
		const pages = Math.ceil(this.totalResults / this.pageSize)
		console.log(pages)
		const maxPage = Math.ceil(99 / this.pageSize)
		return this.totalResults < 99 ? pages : maxPage
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
			if(resp.data.articles.length === 0){
				this.$router.push('/PageView404')
			}
			this.NewsData = resp.data.articles
			this.totalResults = resp.data.totalResults
		})
		.catch(()=>{
			this.$router.push('/PageView404')
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
