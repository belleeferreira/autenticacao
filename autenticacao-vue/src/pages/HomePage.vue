<template>
    <q-page>
        <p>login sucesso {{ userName }} </p>
        <div v-for="(pokemon, i) in pokemons" :key="i">
          {{ pokemons }}
        </div>
    </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { api } from '../boot/axios'
export default defineComponent({
  name: 'HomePage',
  setup () {
    const pokemons = ref([])
    const fetchPokemons = () =>
      api
        .get('/pokemon')
        .then((res) => (pokemons.value = res.data.results))
        .catch(error => console.log(error))
    onMounted(fetchPokemons)

    return { pokemons }
  },
  computed: {
    userName () {
      return localStorage.getItem('username')
    }
  }
})
</script>
