<template>
  <main-layout>
    <div class="container" >
      <h1>レース一覧</h1>
      <RaceList v-for="event in events" :key="event.gender + event.distance + event.style + event.stage" :event="event" />
    </div>
    <router-view></router-view>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import RaceList from "../components/RaceList.vue";
import { database } from "../firebase";

export default {
  components: {
    MainLayout,
    RaceList
  },
  created() {
    database
      .ref("events")
      .once("value")
      .then(events => {
        this.events = events.val();
      });
  },
  data() {
    return {
      events: []
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 10px 0;
  background-color: #18b5df;
  min-height: 100vh;

  h1 {
    text-align: center;
    color: #fff;
    margin: 0;
    line-height: 1;
    padding: 16px 0;
  }
}
</style>

