<template>

  <about-serv />
  
  <counter-serv />
  
  <comment-serv />
  
  <faqs-serv />
  
</template>

<script>
import FaqsServ from '../components/FaqsServ.vue';
import CounterServ from '../components/CounterServ.vue';
import CommentServ from '../components/CommentServ.vue';
import AboutServ from '../components/AboutServ.vue';


export default {
  components: {
    FaqsServ,
    CounterServ,
    CommentServ,
    AboutServ,
  }
}
//   data() {
//     return {
//       step: 1,
//       num: 750,
//       num2: 350,
//       num3: 19,
//       rez1: 0,
//       rez2: 0,
//       rez3: 0,
//       time: 1000,
//       ifNam: false,
//     };
//   },
//   created() {
//     this.toggleFixsedScroll();
//   },
//   methods: {
//     toggleFixsedScroll() {
//       this.ifNam = window.scrollY > 1000;
//       this.startNum();
//       // console.log(this.num)
//     },
//     startNum() {
//       this.step == 0 ? (this.step = 1) : this.step;
//       const tm = Math.random(this.time / (this.num / this.step));
//       let interval = setInterval(() => {
//         this.rez1 = this.rez1 + this.step;
//         if (this.rez1 == this.num) {
//           clearInterval(interval);
//         }
//       }, tm);

//       let interval2 = setInterval(() => {
//         this.rez2 = this.rez2 + this.step;
//         if (this.rez2 == this.num2) {
//           clearInterval(interval2);
//         }
//       }, tm);

//       let interval3 = setInterval(() => {
//         this.rez3 = this.rez3 + this.step;
//         if (this.rez3 == this.num3) {
//           clearInterval(interval3);
//         }
//       }, tm);
//     },
//   },
// };
</script>

<style>
.vcp__header-icon {
  display: none;
}
.vcp__header-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px 0 5px;
}
</style>
