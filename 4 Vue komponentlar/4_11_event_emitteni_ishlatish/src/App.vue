<template>
    <div>
        <h1>Parent: {{ carName }} </h1>

        <app-counter></app-counter>

        <app-car 
        v-bind:carName="carName"
        :carYear="carYear"
        :changeFunc="changeNameToAudi"
        @nameChanged="carName = $event"
        @counterUpdated="counter = $event" >
        </app-car>
    </div>
</template>

<script>
    import Car from './Car'
    import Counter from './Counter'

    export default{
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
            appCar: Car,
            appCounter: Counter
        }
    }
</script>

<style>

</style>