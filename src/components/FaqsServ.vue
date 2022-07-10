<template>
<section>
	<div class="container">
	<div class="faqs">
		<div class="faqs_item">
		<h2>FAQS</h2>
		<p>
			Id at urna non viverra eu volutpat porttitor elementum. Viverra
			senectus dui ultricies dolor.
		</p>
		</div>
		<div class="faqs_qvesh">
		<vue-collapsible-panel-group accordion>
			<div
			v-for="(qv, index) in FaqsServData"
			:key="index"
			class="faqs_qvesh_item"
			>
			<vue-collapsible-panel :expanded="false">
				<template #title>
				<h3>{{ qv.question }}</h3>
				<span></span>
				</template>

				<template #content>
				<p>{{ qv.answer }}</p>
				</template>
			</vue-collapsible-panel>
			</div>
		</vue-collapsible-panel-group>
		</div>
	</div>
	</div>
</section>
</template>

<script>
import {
VueCollapsiblePanelGroup,
VueCollapsiblePanel,
} from "@dafcoe/vue-collapsible-panel";
import axios from "axios";
export default {
components: {
	VueCollapsiblePanelGroup,
	VueCollapsiblePanel,
},
name: "FaqsServ",
data() {
	return {
	FaqsServData: [],
	};
},
created() {
	axios.get("../data/faqs.json").then((resp) => {
	this.FaqsServData = resp.data;
	});
},
};
</script>

<style lang="scss" scoped>
span {
position: relative;
&:after {
	content: "";
	width: 4px;
	height: 20px;
	background: black;
	position: absolute;
	top: 0;
	left: 8px;
}
&::before {
	content: "";
	width: 20px;
	height: 4px;
	background: black;
	position: absolute;
	top: 8px;
	left: 0px;
}
}
.faqs {
display: grid;
grid-template-columns: 1fr 850px;
margin-bottom: 100px;
&_item {
	h2 {
	padding-bottom: 32px;
	}
	p {
	width: 460px;
	}
}
&_qvesh {
	// height: 900px;
	&_item {
	display: grid;
	grid-template-columns: 1fr 20px;
	padding: 30px;
	border: 1px solid rgba(249, 249, 249, 1);
	box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.04);
	margin-bottom: 35px;
	align-items: center;
	}
}
}
</style>
