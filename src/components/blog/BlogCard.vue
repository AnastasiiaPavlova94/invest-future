<template>
<div class="blog"  v-if="BlogData!==null">
	<div class="blog_post" v-for="(item, index) in NewsData" :key="index">
	<div class="img">
		<router-link :to="{name: 'BlogCard', params:{title: item.title }}">
				<img class="img_anim" :src="item.img" alt="post1" @error="errorImg" />
		</router-link>
	</div>
	<div class="blog_post_content">

		<h5 >{{ item.dataPost }}</h5>
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
name: "BlogCard",
data() {
	return {
	BlogData: null,
	};
},
created() {
		axios
		.get("../data/blog.json").then((resp) => {
			this.BlogData = resp.data;
		});
	},
methods: {
	errorImg(e){
		e.target.src = require('@/assets/img/plaseholder.png')
	}
}
}
</script>
