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
		<div>
			<img :src="item.urlToImage" alt="post1"/>
			<!-- <img
				class="card-img-top"
				src="https://via.placeholder.com/430x265"
				alt="post1"
			/>  -->
		</div>
		<div class="blog_post_content">
			<h5 >{{newDataFormated}}</h5>
			<h4>{{ item.title }}</h4>
			<p>
			{{ item.description }}
				<router-link :to="{name: 'BlogCard', params:{title: item.title }}">
					<span>Read More</span>
				</router-link>
			</p>
		</div>
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
	let day = d.getDate() - 1 // -1 для показа новостей за 1 день, а не за текущий
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
	let url = 'https://newsapi.org/v2/everything?q=Design&&sortBy=Design&apiKey=4364238301bb4d329a06c6ae22a91354'
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
	}

}
}
</script>


<style lang="scss" scoped>
$base_fz: 16;
@mixin fz($size_in_px){
    font-size:($size_in_px/$base_fz)+rem;
}
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
.blog{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    &_post{
		img {
			height: 315px;
			box-shadow: 0 0 40px #909090;
		}
        &_content{
            position: relative;
			height: 360px;
            top: -50px;
            left: 1px;
            padding: 30px 35px;
            background-color: #fff;
            box-shadow: 0px 20px 44px 0px rgba(0, 0, 0, 0.06);
            border: 1px solid rgba(249, 249, 249, 1);
			margin: 0px 30px 0 30px ;
            h5{
            @include fz(14);
            line-height: 212.4%;
            color: #BABABA;
            margin-bottom: 10px;
            }
            h4{
                font-weight: 500;
                @include fz(22);
                line-height: 147.9%;
                text-transform: capitalize;
                color: #363535;
                margin-bottom: 14px;
            }
            p{
                line-height: 200.9%;
                color: #818181;
            }
            span {
                font-style: italic;
                font-weight: 400;
                @include fz(14);
                line-height: 200.9%;
                text-decoration-line: underline;
                color: #91795C;
            }
			
        }
    }
}
@media screen and (max-width: 1500px) {
.blog_post_content {
	height: 450px;
	}
}
@media screen and (max-width: 1350px) {
.blog_post_content {
	height: 550px;
	}
}
@media screen and (max-width: 1200px) {
.blog_post_content {
		height: auto;
		margin: 0px;
		left: 0;
	h4 {
		font-size: 1rem;
		}
	p{
		font-size: 1rem;
		}
	}
}
@media screen and (max-width: 1100px) {
.blog {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    gap: 30px;
	}	
	.blog_post_content {
		p{
			padding: 0;
		}
	}
}
@media screen and (max-width: 800px) {
h2{
	padding: 30px 0;
}
}
</style>
