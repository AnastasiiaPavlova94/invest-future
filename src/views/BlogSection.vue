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
	
		<button class="btn">
		View all blogs <span class="icon-long-arrow-right"></span>
		</button>
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
    .btn {
		margin-top: 76px;
        align-self: center;
    }
	p{
		margin-bottom: 30px;
	}
}
</style>