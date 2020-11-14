<template>
    <div>
        <h2>Form inputs</h2>

        <app-onoff v-model="switched"></app-onoff>

        <h1 v-if="switched">Component is enabled</h1>
        <h1 v-else>Component is disabled</h1>
    </div>
</template>

<script>
    import Onoff from './Onoff'

    export default {
        data () {
            return {
                switched: false
            }
        },
        components: {
            appOnoff: Onoff
        }
    }
</script>

<style>

</style>