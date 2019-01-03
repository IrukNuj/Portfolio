<template>
  <div class="column">
    <transition appear>
      <div v-show="show" class="card">
            <div class="card-image">
              <figure class="image is-4by3">
            <img :src='imagePath' alt="Placeholder image" class="card-image">
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-5">{{ name }}</p>
            </div>
          </div>

          <div class="content">
            {{ description }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'WorkCard',
  props: {
    id: {
      type: Number,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false
    },
    path: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      show: true,
    }
  },
  computed: {
    imagePath: function () {
      return require('../assets/thumbnails/' + this.path)
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
    opacity: 0.8;
  }
  .card {
    height: 50vh;
    width: 24vw;
  }
</style>
