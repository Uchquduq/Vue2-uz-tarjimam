<template>
    <div class="container">
        <h1>Car id {{ id }}</h1>

        <button class="btn btn-sm btn-info mt-2 mb-2" @click="goBackToCars">Back</button>

        <br>

        <router-link 
        tag="button" 
        class="btn btn-sm btn-info"
        :to="{name: 'CarFull', params: {id: id},query: {name: 'Mazda', year: 2000}, hash: '#scroll'}"
        >
        Full info
        </router-link>

        <hr>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {
            //id: this.$router.currentRoute.params['id']
            id: this.$route.params['id']
        }
    },
    watch: {
        $route (toR/* ,fromR*/) {
            this.id = toR.params['id']
        }
    },
    methods: {
        goBackToCars() {
            this.$router.push('/car')
        }
    }
}
</script>

<style>

</style>