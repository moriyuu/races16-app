<template>
  <main-layout>
    <div class="container" >
      <RaceList v-for="event in events" :key="event.id" :event="event" />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import RaceList from "../components/RaceList.vue";

export default {
  components: {
    MainLayout,
    RaceList
  },
  data() {
    return {
      events: [
        {
          id: 1,
          style: "平泳ぎ",
          distance: 100,
          stage: "予選",
          gender: "男子",
          races: [1, 2, 3, 4, 5]
        },
        {
          id: 2,
          style: "バタフライ",
          distance: 100,
          stage: "予選",
          gender: "女子",
          races: [1, 2, 3]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  background-color: #18b5df;
  min-height: 100vh;
}
</style>

