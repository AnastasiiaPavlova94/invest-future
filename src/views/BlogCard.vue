<template>
	<div class="container">
		<h1>{{item.title}}</h1>
		<div>
			<img :src="item.urlToImage" alt="post1" />
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
	},
	created(){
		let url = `https://newsapi.org/v2/everything?q=${this.$route.params.title}&serchIn=title&from=2022-07-11&sortBy=popularity&apiKey=4364238301bb4d329a06c6ae22a91354`
		axios
		.get(url)
		.then(resp=>
			this.item = resp.data.articles[0]
		)
	}
}
</script>