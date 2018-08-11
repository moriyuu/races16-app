<template>
    <h2><slot>{{title}}</slot></h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
  //   data() {
  //     return {
  //       menuIcon
  //     };
  //   }
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 18px;
  font-weight: 500;
}
</style>
