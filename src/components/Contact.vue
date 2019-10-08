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
            <p>Twittet : <a href="https://twitter.com/_Iruk_">@_Iruk_</a></p>
            <p>GitHub : <a href="https://github.com/IrukNuj">IrukNuj</a></p>
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
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.limitation {
  animation-iteration-count: infinite;
}
.v-enter-active {
  transition: opacity 0.5s;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
</style>
