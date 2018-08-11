<template>
    <li @click="showRace">
        <slot>{{title}}</slot>
        <img :src="arrowRightIcon" />
    </li>
</template>

<script>
import arrowRightIcon from "../assets/img/arrow-right.svg";

export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      arrowRightIcon
    };
  },
  methods: {
    showRace() {
      this.$router.push("races/" + this.title);
    }
  }
};
</script>

<style scoped lang="scss">
li {
  list-style: none;
  color: #444;
  background-color: #fff;
  height: 60px;
  margin-bottom: 16px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0 2px 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 32px;
  font-size: 20px;
}
</style>
