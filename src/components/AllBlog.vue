<template>
<div class="container">
		<h2>blog posts</h2>
	<div class="blog">
		<div class="blog_post" v-for="(item, index) in NewsData" :key="index">
		<div>
			<img :src="item.urlToImage" alt="post1" />
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
	};
},
computed: {
	newDataFormated() {
	const d = new Date()
	let month = d.getMonth() + 1
	let day = d.getDate() - 1  // -1 для показа новостей за 1 день, а не за текущий
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
	}
}
}
</script>


<style lang="scss" scoped>
$base_fz: 16;
@mixin fz($size_in_px){
    font-size:($size_in_px/$base_fz)+rem;
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
			height: 315px
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
