<template>
  <h1>hola</h1>
  <p>{{burguer}}</p>
  <li v-for="burguer in burguers" :key="burguer.id">
      <h1>{{burguer.nombre}}</h1>
  </li>

</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
 name: 'Detalle',
 computed:{
     ...mapGetters([
         'title',
         'burguers',
         'burguer'
     ]),
 },
 mounted() {
     this.GET_BURGUERS(),
     this.GET_BURGUER(50)
 },
 methods:{
     ...mapActions([
         'GET_BURGUERS',
         'GET_BURGUER'
     ])
 }
}
</script>

<style>

</style>