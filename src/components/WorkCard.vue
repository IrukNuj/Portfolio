<template>
  <div class="column">
    <transition appear>
      <div v-show="show" class="card card-parent">
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

          <div class="tags">
            <div v-for="tag in tags" :key="tag">
              <span class="tag is-light is-rounded">
                {{ tag }}
              </span>
            </div>
          </div>

          <div v-if="url !== ''" class="link-button">
            <a class="button is-info is-outlined" :href="url">詳細</a>
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
    },
    tags: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      show: true
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
  .card-parent{
    height: 100%;
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
    opacity: 0.75;
  }
  @media screen and (min-width:768px) {
    .card {
      height: 58vh;
      width: 24vw;
    }
    @media screen and (min-width:1200px) {
      .card {
        height: 64vh;
        width: 24vw;
      }
    }
    @media screen and (max-height:800px){
      .card {
        height: 64vh;
      }
    }
    .card:hover {
      transform: scale(1.0);
    }
    .tags{
      text-align: center;
    }
    .content{
      height: 100%;
    }
  }
</style>
