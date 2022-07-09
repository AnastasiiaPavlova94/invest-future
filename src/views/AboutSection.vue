<template>
  <section>
    <div class="container cnt">
      <div class="aboutMe">
        <div id="ab">
          <h2>about me</h2>
        </div>
        <div>
          <div>
          <h3>
            This is a studio that offers a full range of services to make your dream home come true.
          </h3>
          <p>Each new project for us is a challenge to do the best job in accordance with the client's business objectives. We work with many areas of design.</p>
          <p>Architectural bureau ARCT was founded in 2010. The bureau employs 55 architects, and half of them have been on the team for more than 10 years. Architecture for us is more than just a set of rules, blueprints and numbers. We like to work with different projects, as we learn a lot from each of them, and keep a fresh look at the profession, but our customers can be calm: we never repeat ourselves.</p>
          </div>
          
        </div>
         
      </div>
       <div class="grid aboutMe">
          <div>
            <p>Eactively developing company with experience in developing projects of various functional purposes and any degree of complexity. Our portfolio includes residential complexes, kindergartens and schools, railway stations, sports and entertainment facilities, author's house designs and interiors. For 10 years of the company's work, we have developed more than 100 projects, most of which have been successfully implemented, and many have been awarded at Ukrainian and international competitions. Our works are regularly published by architectural and interior design magazines and Internet resources, including the world's most authoritative architectural portal "Archdaily". Our customers are both private individuals and state budget organizations. The main geography of our objects is Kyiv and Dnipro, however, we are happy to design interesting objects anywhere in Ukraine and the world and work on each project with 100% return.</p>
          </div>
           <img src="../assets/img/post2.jpg" alt="postabour">
        </div>

         <div class="grid aboutMe">
          <img src="../assets/img/post3.jpg" alt="postabour">
          <div>
            <p>
              Acting as a general designer, we involve time-tested partners in our work - the best related specialists, which makes it possible to develop complex design solutions. Teamwork is built on the interaction of participants in the overall structure of the workflow, debugged over more than 10 years of work. Our work methodology ensures order, systematization of the workflow and optimization of time costs at all stages of design. Each project is supervised directly by the company's managers, and attention to detail significantly reduces the time and material costs of our clients at the construction stage. Our company has certificates for all types of design work related to the creation of architectural objects, engineering design and surveys.
            </p>
             </div>
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

// export default{
//   data() {
//     return {
//       about: false,
//     }
//  },
//   methods: {
//     aboutFul(){
//       this.about = true
//       console.log(this.about);
//   }
//  }
// }
// </script>


<style lang="scss" scoped>
.container{
  padding-bottom: 150px;
}
.grid{
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 50px;
  align-items: center;
  justify-items: center;
    img{
        box-shadow: 0 0 40px #909090;
       }
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

