<template>
  <div class="contents">
    <div v-for="_ in 3" key="{{ i }}" class="columns">
      <WorkCard></WorkCard>
      <WorkCard></WorkCard>
      <WorkCard></WorkCard>
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
