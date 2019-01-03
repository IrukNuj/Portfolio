<template>
  <div id="app">
    <!--<div class="container">-->
      <div class="columns">
        <div class="column is-2 aside-content">
          <Menu></Menu>
        </div>
        <div class="column is-10 main-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  components: { Menu },
  name: 'App'
}
</script>

<style lang="scss">
@import "../node_modules/bulma";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-image: url("assets/1.png");
}

@media screen and (min-width:768px) {
  .main-content {
    margin-top: 5vh;
  }
}

.main-content {
  padding-right: 3vw;
  padding-left: 3vw;
}

</style>
