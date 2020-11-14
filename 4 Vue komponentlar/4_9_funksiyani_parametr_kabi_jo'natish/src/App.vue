<template>
    <div>
        <h1>Parent: {{ carName }} </h1>

        <app-car 
        v-bind:carName="carName"
        :carYear="carYear"
        :changeFunc="changeNameToAudi"
        @nameChanged="carName=$event">
        </app-car>
    </div>
</template>

<script>
    import Car from './Car.vue'

    export default {
        data() {
            return {
               carName: 'Ford',
               carYear: 2018   
            }
        },
        methods: {
            changeNameToAudi(){ 
                this.carName = 'Audi'
            }
        },
        components: {
            appCar: Car
        }
    }
</script>

<style>

</style>