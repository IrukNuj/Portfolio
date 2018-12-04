<template>
  <div class="column">
    <div class="card">
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

    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkCard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding-top: 5vh;
  }
</style>
