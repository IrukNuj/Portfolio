<template>
  <div class="container">
    <div v-for="i in 9" key="{{ i }}">
      <div v-if="i % 3 === 0" class="columns">
          <div class="column">
            <article class="message is-primary">
              <div class="message-header">
                <p>Primary</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </div>
            </article>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
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
  }
</style>
