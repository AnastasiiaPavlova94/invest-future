<template>
					<div class="contactMe_item">
							<h2>contact me</h2>
							<p>
								Get in touch by staying connected with us. If you have any
								question about our process or company? Let us know how we can
								help. Feel free to contact us.
							</p>

<div v-if="answer.success" role="alert">
	<div class="sendSubmit">{{ answer.text }}</div>
</div>
<div v-if="answer.success === false" role="alert">
	<div class="errSubmit">{{ answer.text }}</div>
</div>

<form
	class="contactMe_item_form"
	@submit.prevent="checkAndSend"
>
	<div class="heiChek">
	<input
		type="text"
		name="First_Name"
		placeholder="Your First Name*"
		:class="{ 'is-invalid': errors.firstName !== '' }"
		v-model.trim="firstName"
		@focus="resetError('firstName')"
	/>
	<div class="plError"></div>
	<div class="err_text">{{ errors.firstName }}</div>
	</div>
	<div class="heiChek">
	<input
		type="text"
		name="Last_Name"
		placeholder="Your Last Name*"
		:class="{ 'is-invalid': errors.lastName !== '' }"
		v-model.trim="lastName"
		@focus="resetError('lastName')"
	/>
	<div class="plError"></div>
	<div class="err_text">{{ errors.lastName }}</div>
	</div>
	<div class="heiChek">
	<input
		type="text"
		name="E-mail"
		placeholder="Your Email Address*"
		:class="{ 'is-invalid': errors.email !== '' }"
		v-model.trim="email"
		@focus="resetError('email')"
	/>
	<div class="plError"></div>
	<div class="err_text">{{ errors.email }}</div>
	</div>
	<div class="heiChek">
	<input
		type="text"
		name="Tel"
		placeholder="Your Phone Number"
		:class="{ 'is-invalid': errors.phone !== '' }"
		v-model.trim="phone"
		@focus="resetError('phone')"
	/>
	<div class="plError"></div>
	<div class="err_text">{{ errors.phone }}</div>
	</div>
	<div>
	<input
		type="text"
		name="Text"
		placeholder="Your Message*"
		class="mess"
		:class="{ 'is-invalid': errors.Message !== '' }"
		id="Message"
		v-model.trim="Message"
		@focus="resetError('Message')"
	/>
	<div class="plError"></div>
	<div class="err_text">{{ errors.Message }}</div>
	</div>
	<button class="btn" type="submit">submit</button>
</form>

						</div>
</template>


<script>
export default {
 data() {
	return {
	API_BOT_ID: "5486762126:AAH3TbZphDqriVs9rte6vO64e9PrblSUxL0",
	CHAT_ID: "-1001603625626",
	firstName: "",
	lastName: "",
	email: "",
	Message: "",
	phone: "",
	errors: {
		firstName: "",
		lastName: "",
		email: "",
		Message: "",
		phone: "",
		emailSub: "",
	},
	answer: {
		success: null,
		text: "",
	},
	};
},

	methods: {
	checkAndSend() {
		let valid = true;
		if (this.firstName === "") {
		this.errors.firstName = "Enter your first name";
		valid = false;
		}
		if (this.firstName.length < 1) {
		this.errors.firstName = "Minimal length first name";
		valid = false;
		}
		if (this.lastName === "") {
		this.errors.lastName = "Enter your last name";
		valid = false;
		}
		if (this.lastName.length < 1) {
		this.errors.lastName = "Minimal length last name";
		valid = false;
		}
		if (this.email === "") {
		this.errors.email = "Enter email";
		valid = false;
		} else {
			if (this.isValidEmail(this.email) === false) {
				this.errors.email = "Enter valid email";
				valid = false;
			}
		}
		if (this.phone === "") {
		this.errors.phone = "Enter your phone namber";
		valid = false;
		}
		if (this.isValidPhone(this.phone) === false) {
		this.errors.phone = "Enter your phone namber";
		valid = false;
		}
		if (this.Message === "") {
		this.errors.Message = "Enter Message";
		valid = false;
		}
		if (valid) {
		const messeger_text =
			"<i>Feedbeck data</i>" +
			"%0a<b>First Name: </b>" +
			this.firstName +
			"%0a<b>Last Name: </b>" +
			this.lastName +
			"%0a<b>Phone: </b>" +
			this.phone +
			"%0a<b>Email: </b>" +
			this.email +
			"%0a<b>Massager: </b>" +
			this.Message;
		fetch(
			`https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${messeger_text}&parse_mode=HTML`
		)
			.then((resp) => { 
			return resp.json();
			})
			.then((resp) => {
			if (resp.ok) {
				this.answer.success = true;
				this.answer.text = "Massager successfully send";
				this.firstName = this.lastName = this.email = this.Message = this.phone = '';
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
			// eslint-disable-next-line no-use-before-define
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
		);
	},
	isValidPhone(phone) {
		return Boolean(
		phone.match(
			// eslint-disable-next-line no-use-before-define
			/^((8|\+3)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/
		)
		);
	},
	}
}
</script>

<style lang="scss">
@media screen and (max-width: 1100px) {
	.contactMe img {
		right: -30px;
	}
}
@media screen and (max-width: 900px) {
	.contactMe img {
		display: none;
	}
	.contactMe {
    margin-top: 0px;
	}
}
@media screen and (max-width: 760px) {
	.contactMe {
		grid-template-columns: 1fr;
		margin-left: 47px;
		width: 500px;
		&_item {
			padding: 0px;
			&_form {
				width: 450px;
				column-gap: 12px;
			}
		}
	}
	.contactMe_item_form input,
	.contactMe_item_form textarea {
		width: 211px;
	}
	.contactMe_item_form .mess {
		width: 455px;
	}
}
@media screen and (max-width: 600px) {
	.contactMe {
		margin-left: 0;
	}
}
@media screen and (max-width: 550px) {
	.contactMe_item_form {
		display: flex;
		flex-direction: column;
	}
	.contactMe_item_form .mess,
	.contactMe_item_form input,
	.contactMe_item_form textarea {
		width: 300px;
	}
	.contactMe {
		margin-left: 47px;
		margin-bottom: 188px;
		margin-top: 30px;
	}
	.contactMe {
		width: 300px;
		&_item {
			p {
				margin-bottom: 20px;
				width: 320px;
			}
			&_form {
				width: 320px;
			}
		}
	}
}
@media screen and (max-width: 400px) {
	.contactMe_item p {
		width: 251px;
	}
	.contactMe {
		margin-left: 13px;
	}
	.contactMe_item_form .mess,
	.contactMe_item_form input,
	.contactMe_item_form textarea {
		width: 203px;
		height: 30px;
	}
	.contactMe_item_form {
		width: 204px;
	}
}
</style>