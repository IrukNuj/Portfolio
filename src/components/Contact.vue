<template>
  <transition>
    <div class="box zoomIn limitation">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img class="is-rounded" src="../assets/daru-girl.jpeg" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>Twittet : @Iruk_Nuj</p>
            <p>Mail : kurijune(@)gmail(.)com</p>
          </div>
        </div>
      </article>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.limitation {
  animation-iteration-count: infinite;
}
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}

</style>
