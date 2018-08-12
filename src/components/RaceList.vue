<template>
      <div class="wrapper">
          <RaceListTitle>{{event.gender}} {{event.distance}}m {{event.style}} {{event.stage}}</RaceListTitle>
          <ul>
              <RaceListItem v-for="(race, index) in event.races" :key="race">{{index + 1}}組 - {{race.startTime}}</RaceListItem>
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
