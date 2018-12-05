<template>
  <div class="column">
    <transition appear>
      <div v-show="show" class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-5">おもいだしったー</p>
            </div>
          </div>

          <div class="content">
            Railsで簡単にOauth認証を実装し、ログインユーザーの過去の呟きを思い出せるアプリを作成。
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
        <button @click="show = !show">きりきり</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'WorkCard',
  data () {
    return {
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding-top: 5vh;
  }
  .v-enter-active, .v-leave-active {
    transition: opacity 1s;
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
