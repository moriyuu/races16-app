<template>
  <div class="wrapper">
    <VHeader />
    <div class="container">
      <ul>
        <li>
          <VLink href="/">Home</VLink>
          <VLink href="/about">About</VLink>
        </li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VLink from "../components/VLink.vue";
import VHeader from "../components/VHeader.vue";

export default {
  components: {
    VLink,
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
