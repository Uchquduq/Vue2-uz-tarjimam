<template>
    <div class="car">
        <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
        <p>Year: {{ carYear }}</p>
    </div>
</template>

<script>
export default {
   // props: ['carName','carYear'],
   // props: {
   //     carName: String,
   //     carYear: Number
   // },
    props: {
        carName: {
            type: String,
            default: 'Default name'
        },
        carYear: Number
    },
    computed: {
        reverseName() {
            return this.carName.split('').reverse().join('')
        }
    }
}
</script>

<style>
    .car {
        border: 1px solid black;
    }


</style>