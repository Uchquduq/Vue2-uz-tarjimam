export default {
    data() {
        return {
            searchName: '',
            names: ['Rufat', 'Jahongir', 'Javohir']
        }
    },
    computed: {
        filteredNames() {
            return this.names.filter(name => {
                return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
            })
        }
    },
    created() {
        console.log('created')
    }
}