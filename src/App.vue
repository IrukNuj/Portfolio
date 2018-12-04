<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column aside">
          <Menu></Menu>
        </div>
        <div class="column is-four-fifths main">
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
@import "../node_modules/bulma/bulma";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
