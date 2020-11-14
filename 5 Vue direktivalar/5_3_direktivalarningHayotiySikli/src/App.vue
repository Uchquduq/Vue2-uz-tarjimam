<template>
    <div>
        <h2 v-colored v-if="visible">{{ title }}</h2>
        <button @click="visible = !visible">Toggle</button>
        <button @click="title = 'New title'">Change title</button>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                title: "Hello I'm Vue",
                visible: true
            }
        }
    }

</script>

<style>

</style>