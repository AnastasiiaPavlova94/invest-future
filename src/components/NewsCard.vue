<template>
<div class="blog">
	<div class="blog_post" v-for="(item, index) in NewsData" :key="index">
	<div class="img">
		<router-link :to="{name: 'BlogCard', params:{title: item.title }}">
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
</template>
<script>
import axios from "axios";
export default {
name: "NewsCard",
data() {
	return {
	NewsData: [],
	page: 1,
	};
},
computed: {
	newDataFormated() {
	const d = new Date()
	let month = d.getMonth() + 1
	let day = d.getDate() 
	return (
		d.getFullYear() +
		"-" +
		(month < 10 ? "0" + month : month) +
		"-" +
		(day < 10 ? "0" + day : day)
	)
	}
},
created() {
	this.fetchData();
},
methods: {
	fetchData() {
	let url = 'https://newsapi.org/v2/everything?q=Interior-Design&sortBy=popularity&apiKey=4364238301bb4d329a06c6ae22a91354'
	url += '&from=' + this.newDataFormated
	url += '&to=' + this.newDataFormated
	url += '&language=en'
	url += '&pageSize=3'
	url += '&page=' + this.page
	
	axios
		.get(url)
		.then((resp) => {
			this.NewsData = resp.data.articles
	})
	},
	errorImg(e){
		e.target.src = 'https://via.placeholder.com/430x265'
	}
}
}
</script>
