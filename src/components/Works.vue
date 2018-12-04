<template>
  <div class="container">
    <div v-for="i in 9" key="{{ i }}">
      <div v-if="i % 3 === 0" class="columns">
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
      </div>
    </div>
  </div>
</template>

<script>
import WorkCard from '@/components/WorkCard'
export default {
  components: { WorkCard },
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
  .container {
    padding-top: 5vh;
    padding-right: 3vw;
  }
</style>
