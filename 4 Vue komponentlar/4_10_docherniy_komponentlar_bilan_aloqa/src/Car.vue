<template>
    <div class="car">
        <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
        <p>Year: {{ carYear }}</p>
        <button @click="changeName">Change name</button>
        <button @click="changeFunc()">Change from parent</button>
        <button @click="updateCounter()">Update Counter</button>
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
        carYear: Number,
        changeFunc: Function,
        counter: Number
    },
    methods: {
        changeName() {
            this.carName = "Mazda"
            this.$emit('nameChanged', this.carName)
        },
        updateCounter() {
            this.$emit('counterUpdated', this.counter + 1)
        }
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