<template>
    <div>
        <h2>Form select</h2>
        <select name="" id="" v-model="social">
            <option v-for="s in socialsList">
                {{ s }}
            </option>
        </select>

        <hr>

        <p>{{ social }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                defaultSocial: 'Vk',
                social: 'Instagramm',
                socialsList: ['Facebook','Vk','Instagramm']
            }
        }
    }
</script>

<style>

</style>