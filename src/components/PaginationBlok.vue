<template id="pagination">
			<ul class="pagination"> 
			<li>
				<button @click="goToPage(page-1)" :class="{disabled: isDisabledFirst}">&laquo;</button>
			</li>
				<template v-if="showeFirst">
					<li>
						<button @click="goToPage(1)">1</button>
					</li>
					<li>
						<button>...</button>
					</li>
				</template>
			<li v-for="p in pageRange" :key="p">
				<button @click="goToPage(p)" :class="{activ: p===page}">{{ p }}</button>
			</li>
				<template v-if="showeLast">
					<li>
						<button>...</button>
					</li>
					<li>
						<button @click="goToPage(total)">{{ total }}</button>
					</li>
				</template>
			<li>
				<button @click="goToPage(page+1)" :class="{disabled: isDisabledLast}">&raquo;</button>
			</li>
		</ul>
</template>

<script>
export default {
	props:{
		page:{
			type: Number,
			default: 1,
			required: true
		},
		total:{
			type: Number,
			default: 0,
			required: true
		}
	},
	computed: {
		pageRange () {
			let start = this.page - 2 
			let end = this.page + 2

			if (this.page < 5){
				start = 1
				end = 5
			}
			if (this.page > this.total - 4){
				start = this.total - 4
				end = this.total
			}
			if(start < 1){
				start = 1
			}
			if(end > this.total){
				end = this.total
			}
			if(this.total === 6 ){
				start = 1
			}
			return Array(end - start + 1).fill().map((_, idx) => start + idx)
		},
		isDisabledFirst(){
			return this.page === 1
		},
		isDisabledLast(){
			return this.page === this.total
		},
		showeFirst(){
			return this.page > 5
		},
		showeLast(){
			return this.page < this.total - 5
		}
	},
	methods: {
		// goToStart(){
		// 	if(this.page != 1){
		// 		this.page = this.page - 1
		// 		this.fetchData()	
		// 	}
		// },
		// goToEnd(){
		// 		if(this.page != this.total){
		// 			this.page = this.page + 1
		// 			this.fetchData()
		// 		}
		// },
		goToPage(new_page){
			this.$emit('toPage', new_page)
		}
	},
	template: '#pagination'
}
</script>

<style lang="scss">
.pagination{
	display: flex;
	padding-bottom: 25px;
	justify-content: right;
	li{
		padding: 5px;
		button{
			font-family: "Rubik";
			font-size: 20px;
			width: 40px;
			height: 40px;
			background: none;
			border: 1px solid #cdcdcd;
			box-shadow: 0 0 4px #d4d4d4;
			border-radius: 5px;
			color: #777;
			&:hover{
				box-shadow: 0 0 18px #d4d4d4;
			}
		}
		.disabled{
				color: #cdcdcd;
				&:hover{
					box-shadow: 0 0 0px #d4d4d4;
				}
		}
		.activ{
			color: #91795C;
			background-color: #e9eaf8;
		}
	}
}
@media screen and (max-width: 480px) {
.pagination li button {
	font-family: "Rubik";
	font-size: 15px;
	width: 20px;
	height: 20px;
	}
}
</style>