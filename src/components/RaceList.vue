<template>
      <div class="wrapper">
          <RaceListTitle>{{event.gender}} {{event.distance}}m {{event.style}} {{event.stage}}</RaceListTitle>
          <ul v-for="race in event.races" :key="race">
              <RaceListItem>12組 - 13:30</RaceListItem>
          </ul>
      </div>
</template>

<script>
import RaceListItem from "./RaceListItem.vue";
import RaceListTitle from "./RaceListTitle.vue";

export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  components: {
    RaceListItem,
    RaceListTitle
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  padding: 0 5%;
  margin-bottom: 40px;

  ul {
    padding: 0;
  }
}
</style>
