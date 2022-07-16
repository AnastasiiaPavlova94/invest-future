<template>
			<section class="back_img">
				<div class="container">
					
						
						<home-slider />

					
				</div>
			</section>
</template>

<script>
import HomeSlider from '../components/HomeSlider.vue';
export default {
	components: {
		HomeSlider,
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

