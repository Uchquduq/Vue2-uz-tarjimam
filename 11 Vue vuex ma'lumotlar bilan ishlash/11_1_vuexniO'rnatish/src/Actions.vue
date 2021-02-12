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
        this.$emit('counterUpdated', val)
      }
    }
  }
</script>

<style scoped>

</style>
