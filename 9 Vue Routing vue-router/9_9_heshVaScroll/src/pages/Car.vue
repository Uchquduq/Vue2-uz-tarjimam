<template>
  <div class="container">
    <h1>Car page</h1>

    <ul>
      <router-link
      tag="li"
      v-for="car in 5"
      :to="'/car/' + car"
      :key="car"
      >
        <a href="">{{ car }}</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>

<style>

</style>