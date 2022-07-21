<template>
			<section class="back_img">
				<div class="container">
					
						
						<home-slider />

						<blog-section/>

						<contact-section />

				</div>
			</section>
</template>

<script>
import HomeSlider from '../components/HomeSlider.vue';
import BlogSection from '../components/BlogSection.vue';
import ContactSection from '../views/ContactSection.vue';
export default {
	components: {
		HomeSlider,
		BlogSection,
		ContactSection,
	}
}
</script>


<style lang="scss">
	.back_img {
		background: url("@/assets/img/Rectangle_sect1.png") right top/68% no-repeat;
		position: relative;
		top: -121px;
		right: 0px;
		z-index: 0;
	}

@media screen and (max-width: 900px) {
	.back_img {
		background: url(http://localhost:8081/img/Rectangle_sect1.33d571c2.png) right top/87% no-repeat;
	}
}
@media screen and (max-width: 550px) {
	.back_img {
		background: url(http://localhost:8081/img/Rectangle_sect1.33d571c2.png) right top/100% no-repeat;
	}
}
</style>


