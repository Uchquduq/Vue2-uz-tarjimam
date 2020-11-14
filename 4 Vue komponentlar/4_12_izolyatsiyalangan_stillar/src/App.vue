<template>
    <div>
        <app-counter></app-counter>
        <app-car></app-car>
    </div>
</template>

<script>
import Car from './Car'
import Counter from './Counter'
    
    export default{
        components: {
            appCar: Car,
            appCounter: Counter
        }
    }
</script>

<style>
</style>