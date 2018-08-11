<template>
  <div class="wrapper">
    <VHeader />
    <div class="container">
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

<style scoped lang="scss">
@import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);

.wrapper {
  font-family: "Avenir", "Noto Sans Japanese", sans-serif;
}
</style>
