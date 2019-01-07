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
            <p>Twittet : <a href="https://twitter.com/Iruk_Nuj">@Iruk_Nuj</a></p>
          </div>
        </div>
      </article>
    </div>
  </transition>
</template>

<script>
import WorkCard from '@/components/WorkCard'

export default {
  components: {WorkCard},
  name: 'About',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
  .v-enter-active{
    transition: opacity 0.5s;
  }
  .v-enter {
    opacity: 0;
  }
  .v-enter-to {
    opacity: 1;
  }

</style>
