<template>
  <div class="wrapper">
    <VHeader />
    <div class="container">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VHeader from "../components/VHeader.vue";

export default {
  components: {
    VHeader
  }
};
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);

.wrapper {
  font-family: "Avenir", "Noto Sans Japanese", sans-serif;
}
</style>
