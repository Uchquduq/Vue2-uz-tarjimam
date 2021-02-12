<template>
    <h2>SecondCounter: {{counter}}</h2>
</template>

<script>
  export default {
    computed: {
      counter () {
        return this.$store.getters.computedCounter
      }
    }
  }
</script>

<style scoped>

</style>
