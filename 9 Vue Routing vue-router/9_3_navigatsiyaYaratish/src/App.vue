<template>
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home <span class="sr-only"></span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/car'">Car </router-link>
        </li>
      </ul>
    </div>
  </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default{}
</script>

<style>


</style>