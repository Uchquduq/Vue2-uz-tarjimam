<template>
    <div class="container">
        <form action="" class="pt-3">
            <!-- Email -->
            <div class="form-group">
                <label for="email">Email</label>
                <input 
                type="text"
                id="email" 
                class="form-control"
                :class="{'is-invalid': $v.email.$error}"
                @blur="$v.email.$touch()" 
                v-model="email">
            </div>

            <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
            <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>

            <!-- Password -->
            <div class="form-group">
                <label for="password">Password</label>
                <input
                type="password"
                id="password"
                class="form-control"
                :class="{'is-invalid': $v.password.$error}"
                @blur="$v.password.$touch()"
                v-model="password"> 
            </div>

            <div class="invalid-feedback" v-if="!$v.password.minLength">Minlength of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}</div>

            <!-- Confirm password -->
            <div class="form-group">
                <label for="confirm">Confirm password</label>
                <input
                type="password"
                id="confirm"
                class="form-control"
                :class="{'is-invalid': $v.confirmPassword.$error}"
                @blur="$v.confirmPassword.$touch()"
                v-model="confirmPassword"> 
            </div>

            <div class="invalid-feedback" v-if="!$v.password.minLength">Minlength of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}</div>
        </form>
    </div>
</template>

<script>
    import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

    export default {
        data () {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                minLength: minLength(6)
            },
            confirmPassword: {
                sameAs: sameAs('password')
            }
        }
    }

</script>

<style>

</style>