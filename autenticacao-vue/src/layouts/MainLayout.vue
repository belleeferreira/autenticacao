<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <button v-if="showLogout" outline rounded @click="logout()">Logout</button>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  data () {
    return {
    }
  },
  computed: {
    showLogout () {
      return this.$store.state.example.isLoggedIn
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('username')
      localStorage.setItem('isLoggedIn', '')
      this.$store.commit('example/someMutation', false)
      this.$router.push('/') // redirecionar para a página de login
    }
  }
})
</script>
