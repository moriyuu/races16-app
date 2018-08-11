<template>
  <main-layout>
    <div class="container" >
      <h1>レース一覧</h1>
      <RaceList v-for="event in events" :key="event.id" :event="event" />
    </div>
    <router-view></router-view>
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
        },
        {
          id: 3,
          style: "個人メドレー",
          distance: 400,
          stage: "タイム決勝",
          gender: "女子",
          races: [1, 2, 3, 4, 5, 6, 7]
        }
      ]
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

