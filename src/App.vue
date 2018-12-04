<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column">
          <ul class="menu-list">
            <li><p class="menu-list">Dashboard</p></li>
            <li><p class="menu-list">Customers</p></li>
          </ul>
        </div>
        <div class="column is-four-fifths">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  margin-top: 60px;
}
</style>
