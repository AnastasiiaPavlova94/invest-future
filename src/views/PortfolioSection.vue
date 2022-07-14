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
			</div>
		</div>
		<portfolio-tab />
	</section>
</template>

<script>
import PortfolioTab from '../components/PortfolioTab.vue';
export default {
components: {
	PortfolioTab
	}
}
</script>


