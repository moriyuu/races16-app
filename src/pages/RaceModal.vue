<template>
<div class="wrapper">
    <section class="modal" v-click-outside.notouch="onClickOutside">
        <h2 class="eventName">男子 100m 平泳ぎ 予選</h2>
        <h1 class="groupNum">15組</h1>
        <div class="scheduledTime">
            <div class="title">開始予定</div>
            <div class="time">12:03</div>
        </div>
        <div class="actionBar">
            <div class="button">❤️</div>
            <div class="button">☝️</div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  methods: {
    onClickOutside() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.66);
  position: fixed;
  top: 0;
  left: 0;

  .modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #fff;
    height: 80vw;
    width: 70vw;
    box-shadow: rgba(0, 0, 0, 0.5) 0 2px 4px;
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;

    .eventName {
      font-size: 18px;
      font-weight: 400;
      margin-top: 40px;
    }

    .groupNum {
      font-size: 44px;
      line-height: 1;
      font-weight: 700;
      margin: 28px 0;
    }

    .scheduledTime {
      .title {
        font-size: 14px;
      }

      .time {
        font-size: 30px;
        font-weight: 600;
      }
    }

    .actionBar {
      display: flex;
      justify-content: space-around;
      margin-top: 16px;

      .button {
        min-height: 80px;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
}
</style>
