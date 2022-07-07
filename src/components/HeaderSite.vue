<template>
  <div id="side_block" ref="" :class="{ open: isOpenMobMenu }">
    <div class="side_block_header">
      <a href="#" class="logo">
        <img src="@/assets/img/logo.svg" alt="Logo" />
      </a>
      <div class="hamb_menu">
        <button
          class="hamburger hamburger--slider"
          :class="{ 'is-active': isOpenMobMenu }"
          @click="toggleMobMen"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>

    <div class="links">
      <h4>quick links</h4>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about-section">About</router-link></li>
        <li><router-link to="/service-section">Services</router-link></li>
        <li><router-link to="/portfolio-section">Portfolio</router-link></li>
        <li><router-link to="/blog-section">Blogs</router-link></li>
        <li><router-link to="/contact-section">Contact Us</router-link></li>
      </ul>
    </div>
    <div class="contact">
      <h4>contact info</h4>
      <div
        class="contact_element"
        itemscope
        itemtype="http://schema.org/Organization"
      >
        <a
          target="_blank"
          rel="nofollow, noreferrer"
          itemprop="address"
          itemscope
          itemtype="http://schema.org/PostalAddress"
          href="https://goo.gl/maps/HiFs1PzdBE7K2DoBA"
        >
          <span class="icon-location"></span>
          2489 Locust Court, Los Angeles
        </a>
        <a
          target="_blank"
          rel="nofollow, noreferrer"
          itemprop="address"
          itemscope
          itemtype="http://schema.org/PostalAddress"
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

    <div class="social">
      <a href="#" target="_blank" rel="nofollow, noreferrer" title="facebook"
        ><span class="icon-facebook"></span
      ></a>
      <a href="#" target="_blank" rel="nofollow, noreferrer" title="instagram"
        ><span class="icon-instagram"></span
      ></a>
      <a href="#" target="_blank" rel="nofollow, noreferrer" title="twitter"
        ><span class="icon-twitter1"></span
      ></a>
      <a href="#" target="_blank" rel="nofollow, noreferrer" title="youtube"
        ><span class="icon-youtube-play"></span
      ></a>
      <a href="#" target="_blank" rel="nofollow, noreferrer" title="behance"
        ><span class="icon-behance"></span
      ></a>
    </div>
  </div>

  <div
    id="page_overlay"
    :class="{ open: isOpenMobMenu }"
    @click="toggleMobMen"
  ></div>
  <!--БЛОКИРОВКА ЭКРАНА -->

  <header id="header" :class="{ scroll: ifFixsed }">
    <div class="contsiner_header">
      <div class="header">
        <div class="header_menu">
          <router-link to="/">
            <img src="@/assets/img/logo.svg" alt="Logo" />
          </router-link>
          <nav>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about-section">About</router-link></li>
              <li><router-link to="/service-section">Services</router-link></li>
              <li><router-link to="/portfolio-section">Portfolio</router-link></li>
              <li><router-link to="/contact-section">Contact</router-link></li>
            </ul>
          </nav>
        </div>

        <div class="hamb_menu">
          <button
            class="hamburger hamburger--slider"
            :class="{ 'is-active': isOpenMobMenu }"
            @click="toggleMobMen"
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      ifFixsed: false,
      isOpenMobMenu: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.toggleFixsedScroll);
  },
  methods: {
    toggleFixsedScroll() {
      this.ifFixsed = window.scrollY > 50;
    },
    toggleMobMen() {
      this.isOpenMobMenu = !this.isOpenMobMenu;
    },
  },
};
</script>


