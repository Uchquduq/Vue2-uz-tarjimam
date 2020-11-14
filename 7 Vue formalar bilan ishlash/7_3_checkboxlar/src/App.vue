<template>
    <div>
        <h2>Form checkbox</h2>

        <label for="">
            <input type="checkbox" value="Instagramm" v-model="social">Instagramm
        </label>

        <label for="">
            <input type="checkbox" value="VK" v-model="social">VK
        </label>

        <label for="">
            <input type="checkbox" value="Facebook" v-model="social">Facebook
        </label>

        <hr>

        <ul>
            <li v-for="s in social">{{ s }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                social: ['VK']
            }
        }
    }
</script>

<style>

</style>