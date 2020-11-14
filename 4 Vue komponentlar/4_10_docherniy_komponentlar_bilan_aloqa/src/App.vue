<template>
    <div>
        <h1>Parent: {{ carName }} </h1>

        <app-counter :counter="counter"></app-counter>

        <app-car 
        v-bind:carName="carName"
        :carYear="carYear"
        :counter="counter"
        :changeFunc="changeNameToAudi"
        @nameChanged="carName = $event"
        @counterUpdated="counter = $event" >
        </app-car>
    </div>
</template>

<script>
    import Car from './Car.vue'
    import Counter from './Counter.vue'

    export default {
        data() {
            return {
               carName: 'Ford',
               carYear: 2018,
               counter: 0   
            }
        },
        methods: {
            changeNameToAudi(){ 
                this.carName = 'Audi'
            }
        },
        components: {
            appCar: Car,
            appCounter: Counter
        }
    }
</script>

<style>

</style>