<template>
    <div>
        <h2>Input text!</h2>
        <textarea name="" id="" cols="30" rows="10" v-model="textarea"></textarea>
        <p>{{ textarea }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                textarea: 'I am initial text'
            }
        }
    }
</script>

<style>
    textarea {
        height: 100px;
        width: 400px;
    }

    p {
        white-space: pre;
    }

</style>