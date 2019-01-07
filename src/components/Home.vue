<template>
  <div class="box home-content level">
    <div class="level-left">
      <h1 class="subtitle">Welcome to Iruk's site!</h1>
    </div>
    <div class="daru-girl-image level-right">
      <img src="../assets/daru-girl_home.png"/>
    </div>
  </div>

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
  }
  .daru-girl-image{
    width: 80%;
    height: 80%;
  }
</style>
