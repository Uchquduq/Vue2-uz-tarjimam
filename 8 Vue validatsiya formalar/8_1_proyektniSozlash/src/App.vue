<template>
    <div class="container">
        <form action="" class="pt-3">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" class="form-control" v-model="email">
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                email: ''
            }
        }
    }

</script>

<style>

</style>