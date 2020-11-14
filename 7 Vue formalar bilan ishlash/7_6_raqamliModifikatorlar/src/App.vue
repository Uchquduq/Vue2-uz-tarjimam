<template>
    <div>
        <h2>Form inputs</h2>
        <input type="text" v-model.number="age">
        <hr>
        <p>{{ age }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                age: 20
            }
        },
        watch: {
            age (value) {
                console.log(value)
                console.log(typeof value)
            }
        }
    }
</script>

<style>

</style>