<template>
    <div>
      <button class="btn btn-success mr-1" @click="updateCounter(1)">Add</button>
      <button class="btn btn-danger ml-1" @click="updateCounter(-1)">Subtract</button>
    </div>
</template>

<script>
  export default {
    methods: {
      updateCounter(val) {
        //this.$store.state.counter += val
        //this.$store.commit('changeCounter', val)
        this.$store.dispatch('asyncChangeCounter', {
          counterValue: val,
          timeoutDelay: 1200
        })
      }
    }
  }
</script>

<style scoped>

</style>
