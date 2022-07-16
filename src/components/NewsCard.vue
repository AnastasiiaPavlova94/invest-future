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
		{{ item.description }}
			<router-link :to="{name: 'BlogCard', params:{title: item.title }}">
				<span>Read More</span>
			</router-link>
		</p>
	</div>
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
	let url = 'https://newsapi.org/v2/everything?q=Design&from=2022-07-11&sortBy=popularity&apiKey=4364238301bb4d329a06c6ae22a91354'
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
	}
}
}
</script>


<style lang="scss">
$base_fz: 16;
@mixin fz($size_in_px){
    font-size:($size_in_px/$base_fz)+rem;
}

.blog{
    display: grid;
    grid-template-rows: 640px;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-bottom: 40px;
    &_post{
		img {
			height: 315px
		}
        &_content{
            position: relative;
			height: 400px;
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
                //width: 100%;
                //padding-bottom: 0px;
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
</style>