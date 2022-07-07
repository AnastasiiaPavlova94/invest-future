const App = {
  data() {
    return {
      API_BOT_ID: "5486762126:AAH3TbZphDqriVs9rte6vO64e9PrblSUxL0",
      CHAT_ID: "-1001603625626",
      firstName: "",
      lastName: "",
      email: "",
      massager: "",
      phone: "",
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        massager: "",
        phone: "",
        emailSub: "",
      },
      answer: {
        success: null,
        text: "",
      },
    };
  },

    // methods: {
    //   checkAndSend() {
    //     let valid = true;
    //     if (this.firstName === "") {
    //       this.errors.firstName = "Enter your first name";
    //       valid = false;
    //     }
    //     if (this.firstName.length < 1) {
    //       this.errors.firstName = "Minimal length first name";
    //       valid = false;
    //     }
    //     if (this.lastName === "") {
    //       this.errors.lastName = "Enter your last name";
    //       valid = false;
    //     }
    //     if (this.lastName.length < 1) {
    //       this.errors.lastName = "Minimal length last name";
    //       valid = false;
    //     }
    //     if (this.email === "") {
    //       this.errors.email = "Enter email";
    //       valid = false;
    //     } else {
    //       if (this.isValidEmail(this.email) === false) {
    //         this.errors.email = "Enter valid email";
    //         valid = false;
    //       }
    //     }
    //     if (this.phone === "") {
    //       this.errors.phone = "Enter your phone namber";
    //       valid = false;
    //     }
    //     if (this.isValidPhone(this.phone) === false) {
    //       this.errors.phone = "Enter your phone namber";
    //       valid = false;
    //     }
    //     if (this.massager === "") {
    //       this.errors.massager = "Enter massager";
    //       valid = false;
    //     }
    //     if (valid) {
    //       const messeger_text =
    //         "<i>Feedbeck data</i>" +
    //         "%0a<b>First Name: </b>" +
    //         this.firstName +
    //         "%0a<b>Last Name: </b>" +
    //         this.lastName +
    //         "%0a<b>Phone: </b>" +
    //         this.phone +
    //         "%0a<b>Email: </b>" +
    //         this.email +
    //         "%0a<b>Massager: </b>" +
    //         this.massager;
    //       fetch(
    //         `https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${messeger_text}&parse_mode=HTML`
    //       )
    //         .then((resp) => { 
    //           return resp.json();
    //         })
    //         .then((resp) => {
    //           if (resp.ok) {
    //             this.answer.success = true;
    //             this.answer.text = "Massager successfully send";
    //           } else {
    //             this.answer.success = false;
    //             this.answer.text = resp.description;
    //           }
    //           setTimeout(() => {
    //             this.answer.success = null;
    //             this.answer.text = "";
    //           }, 3000);
    //         })
    //         .catch(() => {
    //           this.answer.success = false;
    //           this.answer.text = "AJAX error. Pls try again later";
    //         });
    //     }
    //   },
    //   sendEmail(){
    //   let valid = true
    //      if (this.emailSub === "") {
    //       this.errors.emailSub = "Enter email";
    //       valid = false;
    //     } else {
    //       if (this.isValidEmail(this.emailSub) === false) {
    //         this.errors.emailSub = "Enter valid email";
    //         valid = false;
    //       }
    //     }
    //     if (valid) {
    //       const messeger_email =
    //         "<i>Subscribe US</i>" +
    //         "%0a<b>Email: </b>" +
    //         this.emailSub;
    //       fetch(
    //         `https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${messeger_email}&parse_mode=HTML`
    //       )
    //         .then((resp) => { 
    //           return resp.json();
    //         })
    //         .then((resp) => {
    //           if (resp.ok) {
    //             this.answer.success = true;
    //             this.answer.text = "Massager successfully send";
    //           } else {
    //             this.answer.success = false;
    //             this.answer.text = resp.description;
    //           }
    //           setTimeout(() => {
    //             this.answer.success = null;
    //             this.answer.text = "";
    //           }, 3000);
    //         })
    //         .catch(() => {
    //           this.answer.success = false;
    //           this.answer.text = "AJAX error. Pls try again later";
    //         });
    //       }
    //   },
    //   resetError(fld) {
    //     this.errors[fld] = "";
    //   },
    //   isValidEmail(email) {
    //     return Boolean(
    //       email.match(
    //         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //       )
    //     );
    //   },
    //   isValidPhone(phone) {
    //     return Boolean(
    //       phone.match(
    //         /^((8|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    //       )
    //     );
    //   },
    // },
};


Vue.createApp(App).mount("#app");
