<template>
    <div>
        <h2>{{ title }}</h2>
        <input type="text" v-model="searchName">
        <ul>
            <li v-for="name of filteredNames">{{name}}</li>
        </ul>

        <hr>

        <app-list></app-list>
    </div>
</template>

<script>
    import ListMixin from './listMixin'

    export default {
        data () {
            return {
                title: "Hello I am Vue!",
                searchName: '',
                names: ['Rufat','Jahongir','Javohir']
            }
        },
        mixins: [ListMixin],
        computed: {
            filteredNames() {
                return this.names.filter(name => {
                    return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
                })
            }
        },
        filters: {
            lowercase (value) {
                return value.toLowerCase()
            }
        }
    }

</script>

<style>

</style>