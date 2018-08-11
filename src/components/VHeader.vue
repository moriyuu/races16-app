<template>
  <div>
      <div class="menu" @click="showNavigation">
        <img :src="menuIcon" class="hamburger" />
      </div>

      <md-drawer :md-active.sync="isShowingNavigation" class="nav">
        <md-toolbar class="md-transparent" md-elevation="0">
          <img :src="logo" class="logo" />
        </md-toolbar>

        <md-list>
          <md-list-item>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-drawer>
  </div>
</template>

<script>
import menuIcon from "../assets/img/menu.svg";
import logo from "../assets/img/logo.png";

export default {
  data() {
    return {
      menuIcon,
      logo,
      isShowingNavigation: false
    };
  },
  methods: {
    showNavigation: function() {
      this.isShowingNavigation = true;
    }
  }
};
</script>

<style scoped lang="scss">
.menu {
  position: fixed;
  top: 16px;
  left: 16px;
  height: 56px;
  width: 56px;
  background-color: #fdc226;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.5) 0 2px 4px;

  .hamburger {
    height: 18px;
  }
}

.nav {
  background-color: #18b5df;

  .logo {
    margin: 0 auto;
  }
}
</style>
