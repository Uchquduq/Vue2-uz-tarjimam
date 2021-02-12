<template>
  <div class="container text-center pt-5">
    <app-counter></app-counter>
    <app-actions></app-actions>
  </div>
</template>

<script>
  import Counter from './Counter'
  import Actions from './Actions'

  export default {
    components: {
      appCounter: Counter,
      appActions: Actions
    }
  }
</script>
