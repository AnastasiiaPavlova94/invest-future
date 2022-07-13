<template>
<section>
	<div class="container">
	<div class="latest">
		<h2>latest blog posts</h2>
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

