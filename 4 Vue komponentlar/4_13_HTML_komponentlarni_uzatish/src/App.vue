<template>
    <div>
        <app-car>
            <h2 slot="title">Ford</h2>
            <p slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </app-car>
    </div>
</template>

<script>
    import Car from './Car'

    export default{
        data () {
            return {
                carname: 'Ford'
            }
        },
        components: {
            appCar: Car
        }
    }
</script>

<style>

h2 {
    color: red;
}

</style>