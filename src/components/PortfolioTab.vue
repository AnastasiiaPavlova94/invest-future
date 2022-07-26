<template>
	<tabs :options="{ useUrlFragment: false }"  cache-lifetime="10"  @changed="tabChanged" :key="nav-item" >
		<tab name="Houses">
			<lightgallery
						:settings="{ speed: 500, plugins: plugins }"
						:onInit="onInit"
						:onBeforeSlide="onBeforeSlide"
						>
						<a :href="require('@/assets/img/portfolio11.jpeg')">
							<img src="@/assets/img/portfolio11.jpeg" alt="postAbout">
						</a>
						<a :href="require('@/assets/img/portfolio12.jpeg')">
							<img src="@/assets/img/portfolio12.jpeg" alt="postAbout">
						</a>
						<a :href="require('@/assets/img/portfolio13.jpeg')">
							<img src="@/assets/img/portfolio13.jpeg" alt="postAbout">
						</a>
						<a :href="require('@/assets/img/portfolio14.jpeg')">
							<img src="@/assets/img/portfolio14.jpeg" alt="postAbout">
						</a>
						<a :href="require('@/assets/img/portfolio15.jpeg')">
							<img src="@/assets/img/portfolio15.jpeg" alt="postAbout">
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
		.get("data/gallery.json").then((resp) => {
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

.tabs-component-tabs{
	width: 550px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	position: absolute;
	top: 270px;
	right: 120px;
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
		display: block;
		position: relative;
		&:before{
			content: '+';
			width: 100%;
			height: 100%;
			position:absolute;
			top: 0;
			left: 0;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 100px;
			background-color: #2e2e2e;
			opacity: 0;
			transition: .4s ease all;
		}
		&:hover::before{
			opacity: .5;
		}
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
@media screen and (max-width: 1450px){
.tabs-component-tabs{
	position: relative;
	top: 0;
	left: 0;
	margin: 0px auto;
	}
.lightgallery-vue{
	margin-top: 40px;
}
}
@media screen and (max-width: 1000px){
.lightgallery-vue {
	grid-gap: 17px;
	}
}
@media screen and (max-width: 650px){
.lightgallery-vue{
	grid-template-columns: repeat(2, 1fr) ;
	grid-template-rows: repeat(4, 1fr);
	grid-gap: 10px;
	}
	.revers{
		a{
			&:first-child{
				grid-area: 3/ 3 / 5 / 1;
			}
		}
	}
}
@media screen and (max-width: 550px){
	.tabs-component-tabs {
		width: 268px;
	}
	h2{
		text-align: left;
		padding: 18px 0;
	}
}
</style>