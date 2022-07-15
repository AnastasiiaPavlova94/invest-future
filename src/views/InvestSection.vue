<template>
			<section class="back_img">
				<div class="container">
					<div class="invest">
						
						<home-slider />

					</div>
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

$font_Prata: 'Prata';
$base_fz: 16;
@mixin fz($size_in_px) {
	font-size: ($size_in_px/$base_fz) + rem;
}
	.invest{
		margin-left: 65px;
		height: 100vh;
		.slider{
				position: relative;
				z-index: 11;
				h1{
				font-family: $font_Prata;
				@include fz(90);
				font-style: normal;
				font-weight: 400;
				line-height: 110%;
				padding: 228px 0 72px 40px;
				text-transform: capitalize;
				width: 670px;
				color: #201F1F;
				}
				p{
				@include fz(19);
				line-height: 225.9%;
				letter-spacing: 0.02em;
				color: #888888;
				padding: 45px 40px;
				}
				&_item{
						max-width: 1190px;
						display: grid;
						gap: 131px;
						grid-template-columns: 3fr 1fr;
						background: rgba(255, 255, 255, 1);
						align-items: center;
						
				}
		}
	
}
.back_img {
	background: url("@/assets/img/Rectangle_sect1.png") right top/68% no-repeat;
	position: relative;
	top: -121px;
	right: 0px;
	z-index: 0;
}
@media screen and (max-width: 320px) {
    .invest {
        margin-left: 0;
    }
}
</style>

