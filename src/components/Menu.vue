<template>
  <div class="container">
    <ul class="menu-list">
      <li><p class="menu-list">Home</p></li>
      <li><p class="menu-list">About</p></li>
      <li><p class="menu-list">Content</p></li>
      <li><p class="menu-list">Works</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    border-right:solid 1px darkgrey;
    height: 100vh;
  }
  .menu-list {
    padding-top: 5vh;
  }
</style>
