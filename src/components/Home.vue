<template>
  <transition appear>
    <div class="box home-content level">
      <div class="level-left">
        <h1 class="subtitle">Welcome to Iruk's site!</h1>
      </div>
      <div class="daru-girl-image">
        <img src="../assets/daru-girl_home.png"/>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-content{
    height: 80vh;
    border-radius: 5px;
  }
  .daru-girl-image img{
    height: 80vh;
    width: 500px;
  }
  .card-image {
    border-radius: 5px 5px 0px 0px;
  }
  .v-enter-active{
    transition: opacity 0.5s;
  }
  .v-enter {
    opacity: 0;
    /*scale(0, 0);*/
  }
  .v-enter-to {
    opacity: 1;
    /*scale(1, 1);*/
  }
</style>
