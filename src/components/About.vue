<template>
  <transition>
    <div class="box zoomIn limitation">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img class="is-rounded" :src="require('../assets/daru-girl.jpeg')" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              石川でぽちぽち開発をしているWebエンジニアです。<br/>
              気まぐれでWebアプリを作ったりフロントを書いたりしています。<br/>
              生息区域は主にTwitter、話しかけたりふぁぼで反応を与えると喜びます。<br/>
            </p>
            <p>Twitter : <a href="https://twitter.com/_Iruk_">@_Iruk_</a></p>
          </div>
        </div>
      </article>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      image_src: require('../assets/daru-girl.jpeg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.limitation {
  /*animation-iteration-count: infinite;*/
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
