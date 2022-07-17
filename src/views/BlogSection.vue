<template>
<section>
	<div class="container">
	<div class="blog_section">
		<h2>blog posts</h2>
		<p>
		Id at urna non viverra eu volutpat porttitor elementum. Viverra
		senectus dui ultricies dolor.
		</p>
		<news-card />
	<router-link to="/all-blog" class="blg_btn">
			<button class="btn">
			View all blogs <span class="icon-long-arrow-right"></span>
			</button>
	</router-link>
	</div>
	</div>
</section>
</template>

<script>
import NewsCard from '../components/NewsCard.vue';
export default {
 components: {
	NewsCard
}
}
</script>

<style lang="scss">

.blog_section{
	display: flex;
	flex-direction:column;
	padding: 100px 0 100px 0;
	.blg_btn {
		width: 200px;
		margin: 0 auto;
	}
	p{
		padding-bottom: 30px;
	}
}
// @media screen and (max-width: 1100px) {
// 	.blog_section p {
// 		width: 100%;
// 	}
// }
</style>
