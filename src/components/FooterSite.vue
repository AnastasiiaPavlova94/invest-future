<template>
<footer>
	<div class="container">
	<div class="fot_top">
		<div class="logo_soc">
		<a href="#" class="logo">
			<img src="@/assets/img/Foter_logo.png" alt="Logo" />
		</a>
		<p>
			Tristique lacus ullamcorper massa posuere nisl molestie. Nullam
			montes, tortor rhoncus massa. Nisl tellus etiam nec, urna.
		</p>
		<div class="social">
			<a
			href="#"
			target="_blank"
			rel="nofollow, noreferrer"
			title="facebook"
			><span class="icon-facebook"></span
			></a>
			<a
			href="#"
			target="_blank"
			rel="nofollow, noreferrer"
			title="instagram"
			><span class="icon-instagram"></span
			></a>
			<a
			href="#"
			target="_blank"
			rel="nofollow, noreferrer"
			title="twitter"
			><span class="icon-twitter1"></span
			></a>
			<a
			href="#"
			target="_blank"
			rel="nofollow, noreferrer"
			title="youtube"
			><span class="icon-youtube-play"></span
			></a>
			<a
			href="#"
			target="_blank"
			rel="nofollow, noreferrer"
			title="behance"
			><span class="icon-behance"></span
			></a>
		</div>
		</div>
		<div class="links">
		<h4>quick links</h4>
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/about-section">About Us</router-link></li>
			<li><router-link to="/service-section">Services</router-link></li>
			<li>
			<router-link to="/portfolio-section">Portfolios</router-link>
			</li>
			<li><router-link to="/blog-section">Blogs</router-link></li>
			<li><router-link to="/contact-section">Contact Us</router-link></li>
		</ul>
		</div>
		<div class="contact">
		<h4>contact info</h4>
		<div class="contact_element">
			<a
			target="_blank"
			rel="nofollow, noreferrer"
			href="https://goo.gl/maps/HiFs1PzdBE7K2DoBA"
			>
			<span class="icon-location"></span>
			2489 Locust Court, Los Angeles
			</a>
			<a
			target="_blank"
			rel="nofollow, noreferrer"
			href="https://goo.gl/maps/o3ZpVeWtZXb47gxT8"
			>
			<span class="icon-location"></span>
			3927 Red Maple Drive, Los Angeles
			</a>
			<a href="+636673413463" itemprop="telephone"
			><span class="icon-phone"></span>+63 667 341 3463</a
			>
			<a href="contact@templatesjungle.com" itemprop="email">
			<span class="icon-mail-envelope-closed"></span
			>contact@templatesjungle.com</a
			>
		</div>
		</div>

		<div class="subscribe">
		<h4>subscribe us</h4>
		<p>
			Subscribe to our newsletter to stay updated for new products and
			stunnning news.
		</p>
		<form
			method="post"
			enctype="multipart/form-data"
			action="#"
			@submit.prevent="sendEmail"
		>
			<div class="send">
			<input
				type="email"
				name="E-mail"
				placeholder="Enter Your Email Address"
				:class="{ 'is-invalid': errors.emailSub !== '' }"
				v-model.trim="emailSub"
				@focus="resetError('emailSub')"
			/>
			<button class="btn btn-send" type="submit">
				send<span class="icon-paper-plane"></span>
			</button>
			</div>
			<!-- <div class="err_text">{{ errors.email }}</div> -->
		</form>
		</div>
	</div>
	<div class="fot_bot">
		<div>
		<span class="icon-copyright"></span> 2022 TemplatesJungle. All rights
		reserved.
		</div>
		<div>Designed by <span>TemplatesJungle</span></div>
	</div>
	</div>
</footer>
</template>

<script>
export default {
data() {
	return {
	API_BOT_ID: "5486762126:AAH3TbZphDqriVs9rte6vO64e9PrblSUxL0",
	CHAT_ID: "-1001603625626",
	emailSub: "",
	errors: {
		emailSub: "",
	},
	answer: {
		success: null,
		text: "",
	},
	};
},








methods: {
	sendEmail() {
	let valid = true;
	if (this.emailSub === "") {
		this.errors.emailSub = "Enter email";
		valid = false;
	} else {
		if (this.isValidEmail(this.emailSub) === false) {
		this.errors.emailSub = "Enter valid email";
		valid = false;
		}
	}
	if (valid) {
		const messeger_email =
		"<i>Subscribe US</i>" + "%0a<b>Email: </b>" + this.emailSub;
		fetch(
		`https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${messeger_email}&parse_mode=HTML`
		)
		.then((resp) => {
			return resp.json();
		})
		.then((resp) => {
			if (resp.ok) {
			this.answer.success = true;
			this.answer.text = "Massager successfully send";
			} else {
			this.answer.success = false;
			this.answer.text = resp.description;
			}
			setTimeout(() => {
			this.answer.success = null;
			this.answer.text = "";
			}, 3000);
		})
		.catch(() => {
			this.answer.success = false;
			this.answer.text = "AJAX error. Pls try again later";
		});
	}
	},
	resetError(fld) {
	this.errors[fld] = "";
	},
	isValidEmail(email) {
	return Boolean(
		email.match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|("+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
	);
	},
},
};
</script>

<style lang="scss">
$base_fz: 16;
@mixin fz($size_in_px) {
font-size: ($size_in_px/$base_fz) + rem;
}
footer {
background-color: #f0f0f0;
.container {
	display: flex;
	flex-direction: column;
}
.fot_top {
	display: grid;
	grid-template-columns: 3fr 2fr 3fr 3fr;
	align-items: start;
	padding-top: 114px;
}
.fot_bot {
	display: flex;
	justify-content: space-between;
	line-height: 212.4%;
	color: #818181;
	padding-top: 133px;
	padding-bottom: 55px;
	span {
	font-weight: 600;
	}
}
h4 {
	padding-top: 10px;
	padding-bottom: 15px;
}
}
.fot_top {
.logo_soc {
	width: 360px;
	margin-right: 131px;
	.logo img {
	width: 212px;
	padding-bottom: 22px;
	}
	p {
	padding-bottom: 40px;
	}
	.social {
	a {
		width: 38px;
		height: 38px;
		@include fz(14);
		line-height: 14px;
		color: #a5a5a5;
		box-shadow: 0px 7px 13px rgba(0, 0, 0, 0.07);
		padding: 12px 10px 8px 10px;
		background: #ffffff;
		margin-right: 20px;
		.icon-facebook {
		padding: 0 3px;
		}
		&:hover {
		color: #ffffff;
		background: #a5a5a5;
		box-shadow: 0px 7px 9px #aaaaaa;
		}
	}
	}
}
.links {
	margin-right: 115px;
	a {
	padding-bottom: 20px;
	line-height: 226.9%;
	text-transform: capitalize;
	color: #818181;
	&:hover {
		color: #201f1f;
	}
	}
}
.contact_element {
	display: flex;
	flex-direction: column;
	margin-right: 78px;
	a {
	padding-top: 10px;
	padding-bottom: 17px;
	color: #818181;
	display: flex;
	gap: 5px;
	&:hover {
		color: #201f1f;
	}
	}
}
.subscribe {
	p {
	width: 356px;
	}
	.send {
	margin-top: 40px;
	background-color: #fff;
	width: 406px;
	box-shadow: 0px 15px 44px 0px rgba(0, 0, 0, 0.06);
	display: flow-root;
	input {
		width: 275px;
		height: 50px;
		background-color: #fff;
		padding-left: 24px;
		@include fz(15);
		color: #b7b7b7;
		border: none;
		&:active,
		&:focus {
		text-transform: none;
		color: #000;
		}
	}
	.btn-send {
		width: 107px;
		height: 56px;
		padding: 18px;
		&:hover {
		background-color: #000;
		}
	}
	}
}
}
@media screen and (max-width: 1500px) {
	footer {
		.fot_top {
			display: grid;
			grid-template-columns: 3fr 2fr;
			align-items: start;
			padding-top: 114px;
			.contact,
			.subscribe {
			padding-top: 40px;
			}
		}
	}
}
@media screen and (max-width: 1100px) {
.fot_top .logo_soc {
	width: 360px;
	margin-right: 20px;
}
}
@media screen and (max-width: 900px) {
.fot_top .subscribe .send {
	background-color: transparent;
	display: flex;
	flex-direction: column;
	width: 0;
	.btn {
	margin-top: 10px;
	}
}
}
@media screen and (max-width: 760px) {
footer {
	.fot_top {
	display: flex;
	flex-direction: column;
	padding-top: 40px;
		.links {
			padding-top: 30px;
		}
	}
	.fot_bot {
	display: flex;
	flex-direction: column;
	padding-top: 60px;
	padding-bottom: 30px;
	}
}
.fot_top .subscribe {
	p {
	width: 181px;
	}
	.send input {
	width: 198px;
	}
}
}
@media screen and (max-width: 600px) {
.fot_bot {
	@include fz(12);
}
}
@media screen and (max-width: 550px) {
	.fot_top .logo_soc {
		width: 289px;
	}
	.fot_top .subscribe p,
	.fot_top .logo_soc p {
		width: 333px;
	}
}
@media screen and (max-width: 400px) {
	.fot_top .subscribe p,
	.fot_top .logo_soc p {
		width: 300px;
	}
.fot_top .contact_element a {
		@include fz(14);
	}
}
@media screen and (max-width: 320px) {
.fot_top {
	.logo_soc {
		width: 280px;
		margin-right: 0;
			.social a {
				margin-right: 10px;
			}
		}
		.contact_element {
			@include fz(14);
			margin-right: 0px;
		}
	}
}
</style>
