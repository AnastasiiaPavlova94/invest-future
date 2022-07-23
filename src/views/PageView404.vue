<template>
<div class="container">
	<div class="page404">
		<h3>404</h3>
		<h4>Page not found</h4>
	</div>

</div>
</template>

<script>
export default {
	name: 'PageView404'
}
</script>

<style lang="scss" scoped>
	h3, h4{
			font-size: 10rem;
			color: #939393;
			text-align: center;
			text-shadow: #b3b3b3 1px 0 10px;
			font-family: 'Prata';
	}
	h4{
		font-size: 3rem;
	}
	.page404{
		margin: 100px auto;
		height: 100vh;
	}
</style>