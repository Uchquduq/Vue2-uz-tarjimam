<template>
    <div>
        <h2>Form checkbox</h2>

        <label for="">
            <input type="radio" value="Instagramm" v-model="social">Instagramm
        </label>

        <label for="">
            <input type="radio" value="Вконтакте" v-model="social">VK
        </label>

        <label for="">
            <input type="radio" value="Facebook" v-model="social">Facebook
        </label>

        <hr>

        <p>{{ social }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                social: ''
            }
        }
    }
</script>

<style>

</style>