<template>
  <div class="column">
    <transition appear>
      <div v-show="show" class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" class="card-image">
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
          </div>
        </div>
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
  .card {
    transition-duration: 0.5s;
    opacity: 0.8;
    border-radius: 5px;
  }
  .card:hover {
    filter: drop-shadow(8px 8px 8px rgba(0,0,0,0.3));
    opacity: 1;
  }
  .card-image {
    border-radius: 5px 5px 0px 0px;
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
