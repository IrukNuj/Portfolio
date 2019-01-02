<template>
  <div class="contents">
    <div v-for="work in works" key="{{ work.id }}" class="columns">
      <WorkCard></WorkCard>
      <WorkCard></WorkCard>
      <WorkCard></WorkCard>
    </div>
  </div>
</template>

<script>
import WorkCard from '@/components/WorkCard'
import axios from 'axios'

export default {
  components: {WorkCard},
  name: 'Work',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      works: null,
    }
  },
  methods: {

  },
  created () {
    this.works = require('../assets/works')
    alert('hoge')
    alert(this.works)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
