<template>
  <section>
    <div class="container cnt">
      <div class="aboutMe">
          <h2>about me</h2>
          <div>
              <h3>This is a studio that offers a full range of services to make your dream home come true.</h3>
              <p>Each new project for us is a challenge to do the best job in accordance with the client's business objectives. We work with many areas of design.</p>
              <p>Architectural bureau ARCT was founded in 2010. The bureau employs 55 architects, and half of them have been on the team for more than 10 years. Architecture for us is more than just a set of rules, blueprints and numbers. We like to work with different projects, as we learn a lot from each of them, and keep a fresh look at the profession, but our customers can be calm: we never repeat ourselves.</p>
         </div>
         
      </div>
       <div class="flex" v-for="(ab, index) in AboutData" :key="index" :class="index%2 != 1 ? 'revers' : ' '">
          <p>{{ ab.text }}</p>
          <img :src="require('@/assets/img/' + ab.img)" alt="postAbout">
        </div>

        <div class="bt">
          <router-link to="/portfolio-section"><button class="btn">
            View my works <span class="icon-long-arrow-right"></span>
          </button></router-link>
        </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
	name: "AboutSection",
	data() {
		return {
		AboutData: []
		};
	},
	created() {
		axios
		.get("../data/about.json").then((resp) => {
			this.AboutData = resp.data;
		});
	},
};
</script>

<style lang="scss" scoped>
.container{
  padding-bottom: 150px;
}
.flex{
  display: flex;
 // grid-template-columns: 45% 55%;
  gap: 50px;
  align-items: center;
  justify-items: center;
    img{
        box-shadow: 0 0 40px #909090;
       }
}
.revers{
flex-direction: row-reverse;
}
.bt{
  display: flex;
  justify-content: space-around;
}
.aboutMe{
    display: grid;
    grid-template-columns: 1fr 775px;
    margin-top: 100px;
    h3{
        padding-bottom: 36px;
    }
    p{
        padding-bottom: 43px;
    }
  
}
  .btn{
      margin: 20px 0 0 135px;
    }
</style>

