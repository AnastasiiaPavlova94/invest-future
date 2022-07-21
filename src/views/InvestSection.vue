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
</style>


