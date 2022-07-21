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
