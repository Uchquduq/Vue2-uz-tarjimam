<template>
    <div>
        <h2>Input text!</h2>
        <input type="text" v-model="name">
        <h2>{{ name }}</h2>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: ''
            }
        }
    }
</script>

<style>

</style>