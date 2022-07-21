<template>
<div class="container">
		<h2>blog posts</h2>
	
<ul class="pagination"> 
	<li>
		<button @click="goToStart" :class="{disabled: isDisabledFirst}">&laquo;</button>
	</li>
		<template v-if="showeFirst">
			<li>
				<button @click="goToPage(1)">1</button>
			</li>
			<li>
				<button>...</button>
			</li>
		</template>
	<li v-for="p in pageRange" :key="p">
		<button @click="goToPage(p)" :class="{activ: p===page}">{{ p }}</button>
	</li>
		<template v-if="showeLast">
			<li>
				<button>...</button>
			</li>
			<li>
				<button @click="goToPage(totalPage)">{{ totalPage }}</button>
			</li>
		</template>
	<li>
		<button @click="goToEnd" :class="{disabled: isDisabledLast}">&raquo;</button>
	</li>
</ul>
	
	<div class="blog">
		<div class="blog_post" v-for="(item, index) in NewsData" :key="index">
		<div class="img">
			<router-link :to="{name: 'BlogCard', params:{title: item.title }}" class="linkTitle">
				<img :src="item.urlToImage" alt="post1" @error="errorImg" />
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
export default {
name: "AllBlog",
data() {
	return {
	NewsData: [],
	page: 1,
	totalPage: 10
	};
},
computed: {
	newDataFormated() {
	const d = new Date()
	let month = d.getMonth() + 1
	let day = d.getDate()  // -1 для показа новостей за 1 день, а не за текущий
	return (
		d.getFullYear() +
		"-" +
		(month < 10 ? "0" + month : month) +
		"-" +
		(day < 10 ? "0" + day : day)
	)
	},
	pageRange () {
		let start = this.page - 1 
		let end = this.page + 1
		console.log('enf',end)
		if (this.page === 1 ){
			start = this.page 
			end = this.page +2
		}
		if (this.page === this.totalPage ){
			start = this.page - 2
			end = this.totalPage
		}
		console.log('hjn',end)
		return Array(end - start + 1).fill().map((_, idx) => start + idx)
	},
	isDisabledFirst(){
		return this.page === 1
	},
	isDisabledLast(){
		return this.page === this.totalPage
	},
	showeFirst(){
		return this.page > 2
	},
	showeLast(){
		return this.page < this.totalPage - 1
	}
},
created() {
	this.fetchData();
},
methods: {
	fetchData() {
	let url = 'https://newsapi.org/v2/everything?q=Interior-Design&&sortBy=Design&apiKey=4364238301bb4d329a06c6ae22a91354'
	url += '&from=' + this.newDataFormated
	url += '&to=' + this.newDataFormated
	url += '&language=en'
	url += '&pageSize=9'
	url += '&page=' + this.page
	
	axios
		.get(url)
		.then((resp) => {
			this.NewsData = resp.data.articles
	})
	},
	goToPage(p){
		this.page = p
		this.fetchData()
	},
	goToStart(){
		if(this.page != 1){
			this.page = this.page - 1
			this.fetchData()	
		}

	},
	goToEnd(){
		if(this.page != this.totalPage){
			this.page = this.page + 1
			this.fetchData()
		}
	},
	errorImg(e){
		e.target.src = 'https://via.placeholder.com/400x305/FFFFFF'
	}

}
}
</script>


<style lang="scss" scoped>

.pagination{
	display: flex;
	padding-bottom: 25px;
	justify-content: right;
	li{
		padding: 5px;
		button{
			font-family: "Rubik";
			font-size: 20px;
			width: 40px;
			height: 40px;
			background: none;
			border: 1px solid #cdcdcd;
			box-shadow: 0 0 4px #d4d4d4;
			border-radius: 5px;
			color: #777;
			&:hover{
				box-shadow: 0 0 18px #d4d4d4;
			}
		}
		.disabled{
				color: #cdcdcd;
				&:hover{
					box-shadow: 0 0 0px #d4d4d4;
				}
		}
		.activ{
			color: #91795C;
			background-color: #e9eaf8;
		}
	}
}
h2{
	text-align: center;
	padding: 70px 0;
	&::after{
		display: none;
	}
}
</style>
