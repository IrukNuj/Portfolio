<template>
  <div class="menu-content">
    <ul class="menu-list">
      <router-link to="/Home"><p class="menu-list">Home</p></router-link>
      <router-link to="/About"><p class="menu-list">About</p></router-link>
      <router-link to="/"><p class="menu-list">Works</p></router-link>
      <router-link to="/Contact"><p class="menu-list">Contact</p></router-link>
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
    margin-top: 2vh;
    margin-bottom: 2vw;
    paddinng-right: 2vw;
    text-align: center;
  }

  .router-link-active {
    transition: 0.5s;
    background: whitesmoke;
  }

</style>
