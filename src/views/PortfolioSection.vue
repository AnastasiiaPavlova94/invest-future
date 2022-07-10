<template>
    <section>
				<div class="container">
					<div id="portfolio">
						<div class="portfolio_name" id="pr">
							<h2>My portfolio</h2>
							<p>
								Viverra senectus dui ultricies dolor varius nibh velit sapien,
								sapien pellentesque ue dignissim.
							</p>
						</div>
						<ul>
							<li>
								<a href="#" target="_blank" rel="nofollow, noreferrer">Houses</a>
							</li>
							<li>
								<a href="#" target="_blank" rel="nofollow, noreferrer">Buildings</a>
							</li>
							<li>
								<a href="#" target="_blank" rel="nofollow, noreferrer">Hotels</a>
							</li>
							<li>
								<a href="#" target="_blank" rel="nofollow, noreferrer">Interior</a>
							</li>
							<li>
								<a href="#" target="_blank" rel="nofollow, noreferrer">Living rooms</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="gallery" v-for="(gall, index) in GalleryDAta" :key="index">
					<img :src="require('@/assets/img/'+ gall.img1)" alt="postAbout">
					<img :src="require('@/assets/img/'+ gall.img2)" alt="postAbout">
					<img :src="require('@/assets/img/'+ gall.img3)" alt="postAbout">
					<img :src="require('@/assets/img/'+ gall.img4)" alt="postAbout">
					<img :src="require('@/assets/img/'+ gall.img5)" alt="postAbout">
				</div>
			</section>

</template>

<script>
import axios from "axios";
export default {
	name: "PortfolioSection",
	data() {
		return {
		GalleryDAta: []
		};
	},
	created() {
		axios
		.get("../data/gallery.json").then((resp) => {
			this.GalleryDAta = resp.data;
		});
	},
};
</script>


