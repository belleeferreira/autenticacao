<template>
    <q-page class="">
        <q-form class="row justify-center" @submit="login()">
          <p class="col-12 text-h5 text-center">Login</p>
          <div class="col-md-4 col-ms-6 col-xs-10 q-gutter-y-sm">
            <div class="full-width q-pt-md">
              <q-btn label="Login" color="primary" class="full-width" outline rounded type="submit"/>
            </div>
          </div>
        </q-form>
    </q-page>
    </template>

<script>
import { defineComponent } from 'vue'
import msalInstance from '../auth'

export default defineComponent({
  name: 'LoginVue',
  data () {
    return {}
  },
  methods: {
    login () {
      const loginRequest = {
        scopes: ['user.read'] // Add any additional scopes as needed
      }

      msalInstance.loginPopup(loginRequest).then(res => {
        const userName = res.account.name
        const token = res.accessToken
        localStorage.setItem('access_token', token)
        localStorage.setItem('username', userName)
        this.$store.commit('example/someMutation', true)
        // console.log(res)
        this.$router.push('/home')
      })
        .catch(erro => console.log(erro))
    }
  }
})

</script>
