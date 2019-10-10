<template>
  <div class="contents">

    <div class="columns">
      <div v-for="work in works" :key="work.id" >
        <div v-if="work.id <= 3">
            <WorkCard
              :id = "work.id"
              :name = "work.name"
              :description = "work.description"
              :url = "work.url"
              :path = "work.path"
              :tags = "work.tag"
            >
            </WorkCard>
          </div>
        </div>
    </div>

    <div class="columns">
      <div v-for="work in works" :key="work.id" >
        <div v-if="work.id >= 4 && work.id <= 6">
          <WorkCard
            :id = "work.id"
            :name = "work.name"
            :description = "work.description"
            :url = "work.url"
            :path = "work.path"
            :tags = "work.tag"
          >
          </WorkCard>
        </div>
      </div>
    </div>

    <div class="columns">
      <div v-for="work in works" :key="work.id" >
        <div v-if="work.id >= 7 && work.id <= 9">
          <WorkCard
            :id = "work.id"
            :name = "work.name"
            :description = "work.description"
            :url = "work.url"
            :path = "work.path"
            :tags = "work.tag"
          >
          </WorkCard>
        </div>
      </div>
    </div>

    <div class="columns">
      <div v-for="work in works" :key="work.id" >
        <div v-if="work.id >= 10 && work.id <= 12">
          <WorkCard
            :id = "work.id"
            :name = "work.name"
            :description = "work.description"
            :url = "work.url"
            :path = "work.path"
            :tags = "work.tag"
          >
          </WorkCard>
        </div>
      </div>
    </div>

    <div class="columns">
      <div v-for="work in works" :key="work.id" >
        <div v-if="work.id >= 13 && work.id <= 15">
          <WorkCard
            :id = "work.id"
            :name = "work.name"
            :description = "work.description"
            :url = "work.url"
            :path = "work.path"
            :tags = "work.tag"
          >
          </WorkCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkCard from '@/components/WorkCard'
export default {
  components: {WorkCard},
  name: 'Work',
  data () {
    return {
      works: null
    }
  },
  created () {
    this.works = require('../assets/works')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
