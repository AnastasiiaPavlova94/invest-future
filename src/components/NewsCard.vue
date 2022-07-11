<template>
<div class="blog">
	<div class="blog_post" v-for="(item, index) in NewsData" :key="index">
	<div>
		<img :src="item.urlToImage" alt="post1" />
	</div>
	<div class="blog_post_content">
		<h5>{{item.publishedAt}}</h5>
		<h4>{{ item.title }}</h4>
		<p>
		{{ item.discription }}
		<router-link :to="{name: 'BlogCard', params:{title: item.title }}">
			<span>Read More</span>
		</router-link>
		</p>
	</div>
	</div>

	<!-- <div class="blog_post">
	<div>
		<img src="../assets/img/post2.jpg" alt="post3" />
	</div>
	<div class="blog_post_content">
		<h5>Mar 29, 2022</h5>
		<h4>How to make minimalist living rooms pop-out</h4>
		<p>
		Consequat, volutpat morbi tempor elit tellus, ante in mattis. Facilisi
		morbi ipsum dui aliquet...
		<span>Read More</span>
		</p>
	</div>
	</div>
	<div class="blog_post">
	<div>
		<img src="../assets/img/post3.jpg" alt="post3" />
	</div>
	<div class="blog_post_content">
		<h5>Mar 27, 2022</h5>
		<h4>how to make your resort that looks outstanding</h4>
		<p>
		Consequat, volutpat morbi tempor elit tellus, ante in mattis. Facilisi
		morbi ipsum dui aliquet...
		<span>Read More</span>
		</p>
	</div>
	</div> -->
</div>
</template>

<script>
import axios from "axios";
export default {
name: "NewsCard",
data() {
	return {
	// API_KEY: "4364238301bb4d329a06c6ae22a91354",
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
	let url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-07-11&sortBy=popularity&apiKey=4364238301bb4d329a06c6ae22a91354'
	url += '&from=' + this.newDataFormated
	url += '&to=' + this.newDataFormated
	url += '&language=en'
	url += '&pageSize=20'
	url += '&page=' + this.page
	
	axios
		.get(url)
		.then((resp) => {
			this.NewsData = resp.data.articles
	})
	}
}
}
</script>
