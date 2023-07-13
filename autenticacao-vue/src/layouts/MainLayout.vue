<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <button outline rounded v-if="isLoggedIn" @click="logout()">Logout</button>
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
      isLoggedIn: false
    }
  },
  mounted () {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      this.isLoggedIn = true
    }
  },
  methods: {
    logout () {
      // console.log('teste')
      localStorage.removeItem('access_token')
      localStorage.removeItem('username')
      this.isLoggedIn = false
      this.$router.push('/') // redirecionar para a página de login
      alert('Logout realizado com sucesso')
    }
  }
})
</script>
