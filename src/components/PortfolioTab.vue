<template>
	<tabs :options="{ useUrlFragment: false }"  cache-lifetime="10"  @changed="tabChanged" :key="nav-item" >
		<tab name="Houses">
			<lightgallery
						:settings="{ speed: 500, plugins: plugins }"
						:onInit="onInit"
						:onBeforeSlide="onBeforeSlide"
						>
						<a :href="require('@/assets/img/imgGallery1.jpg')">
							<img src="@/assets/img/imgGallery1.jpg" alt="postAbout">
						</a>
						<a :href="require('@/assets/img/imgGallery2.jpg')">
							<img src="@/assets/img/imgGallery2.jpg" alt="postAbout">
						</a>
						<a :href="require('@/assets/img/imgGallery3.jpg')">
							<img src="@/assets/img/imgGallery3.jpg" alt="postAbout">
						</a>
						<a :href="require('@/assets/img/imgGallery4.jpg')">
							<img src="@/assets/img/imgGallery4.jpg" alt="postAbout">
						</a>
						<a :href="require('@/assets/img/imgGallery5.jpg')">
							<img src="@/assets/img/imgGallery5.jpg" alt="postAbout">
						</a>
			</lightgallery>
		</tab>
		<tab v-for="(gall, index) in GalleryDAta" :key="index" :name="gall.tab" >
			<lightgallery
						:settings="{ speed: 500, plugins: plugins }"
						:onInit="onInit"
						:onBeforeSlide="onBeforeSlide"
						:class="gall.revers"
						>
					<a :href="require('@/assets/img/'+ gall.img1)">
						<img :src="require('@/assets/img/'+ gall.img1)" alt="postAbout">
					</a>
					<a :href="require('@/assets/img/'+ gall.img2)">
						<img :src="require('@/assets/img/'+ gall.img2)" alt="postAbout">
					</a>
					<a :href="require('@/assets/img/'+ gall.img3)">
						<img :src="require('@/assets/img/'+ gall.img3)" alt="postAbout">
					</a>
					<a :href="require('@/assets/img/'+ gall.img4)">
						<img :src="require('@/assets/img/'+ gall.img4)" alt="postAbout">
					</a>
					<a :href="require('@/assets/img/'+ gall.img5)">
						<img :src="require('@/assets/img/'+ gall.img5)" alt="postAbout">
					</a>
				
			</lightgallery>
		</tab>
	</tabs>
</template>

<script>
import axios from "axios";
import {Tabs, Tab} from 'vue3-tabs-component';
	import Lightgallery from 'lightgallery/vue';
	import lgThumbnail from 'lightgallery/plugins/thumbnail';
	import lgZoom from 'lightgallery/plugins/zoom';
export default {
	name: "PortfolioTab",
	components: {
		'tabs': Tabs,
		'tab': Tab,
		Lightgallery,
	},
	data() {
		return {
		GalleryDAta: [],
		plugins: [lgThumbnail, lgZoom],
		};
	},
	created() {
		axios
		.get("../data/gallery.json").then((resp) => {
			this.GalleryDAta = resp.data;
		});
	},
	methods: {
	onInit: () => {
		console.log('lightGallery has been initialized');
	},
	onBeforeSlide: () => {
		console.log('calling before slide');
		},
	},
};
</script>


<style lang="scss">
	@import 'lightgallery/css/lightgallery.css';
	@import 'lightgallery/css/lg-thumbnail.css';
	@import 'lightgallery/css/lg-zoom.css';
#portfolio{
	margin-bottom: 144px;
	margin-top: 100px;
	position: relative;
	h2{
		margin-bottom: 34px;
	}
}
.tabs-component-tabs{
	width: 550px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	position: absolute;
	top: 250px;
	right: 300px;
	.tabs-component-tab-a{
		font-weight: 500;
		line-height: 212.4%;
		text-transform: uppercase;
		color: #979797;
		&:hover{
			color: #201F1F;
		}
	}
}
.lightgallery-vue{
	max-width: 1775px;
	margin: 0 auto;
	margin-top: 144px;
	display: grid;  
	grid-template-columns: repeat(4, 1fr) ;
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 60px;
	margin-bottom: 100px;
	a{
		&:first-child{
			grid-area: 1 / 1 / 3 / 3;
		}
	}
}
.revers{
	a{
		&:first-child{
			grid-area: 1/ 5 / 3 / 3;
		}
	}
}
</style>