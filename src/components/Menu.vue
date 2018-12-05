<template>
  <div class="menu-content">
    <ul class="menu-list">
      <li><p class="menu-list">Home</p></li>
      <li><p class="menu-list">About</p></li>
      <li><p class="menu-list">Works</p></li>
      <li><p class="menu-list">Contact</p></li>
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
  .menu-content {
    border-right: solid 1px darkgrey;
    width: 80%;
    margin-top: 5vh;
  }

  .menu-list {
    margin-top: 5vh;
    paddinng-right: 2vw;
    text-align: center;
  }

</style>
