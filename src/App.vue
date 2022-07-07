<template>
  <div>
    <header-site />

    <router-view />

    <footer-site />
  </div>
</template>


<script>
import HeaderSite from './components/HeaderSite.vue';
import FooterSite from './components/FooterSite.vue';

export default {
  components: {
    HeaderSite,
    FooterSite
  }
}
</script>