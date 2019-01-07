<template>
  <div class="menu">
    <div class="menu-content">
      <ul class="menu-list">
        <router-link to="/Home"><p class="menu-list">Home</p></router-link>
        <router-link to="/About"><p class="menu-list">About</p></router-link>
        <router-link to="/work"><p class="menu-list">Works</p></router-link>
        <router-link to="/Contact"><p class="menu-list">Contact</p></router-link>
      </ul>
    </div>
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
  .menu {
    height: 100vh;
  }
  @media screen and (max-width: 768px){
    .menu {
      height: auto;
    }
  }
  @media screen and (min-width: 768px) {
    .menu-content {
      margin-top: 5vh;
    }
  }
  .menu-content {
    border-right: solid 1px darkgrey;
    width: 100%;
  }

  .menu-list {
    margin-top: 2vh;
    margin-bottom: 2vw;
    text-align: center;
  }

  .router-link-active {
    transition: 0.5s;
    background: whitesmoke;
  }

</style>
