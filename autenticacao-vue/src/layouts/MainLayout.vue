<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <button outline rounded @click="logout()">Logout</button>
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
  // data() {
  //   return localStorage.getItem('username')

  // },
  // computed: {
  //   isLoggIn () {
  //     if ('username'==true) {
  //       return true
  //     }
  //   }
  // },
  methods: {
    logout () {
      console.log('teste')
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem('access_token')

      // Remove userData from localStorage
      // localStorage.removeItem('useData')

      this.$router.push('/') // redirecionar para a página de login ou para a rota apropriada
      alert('Logout realizado com sucesso')
    }
  }
})
</script>
