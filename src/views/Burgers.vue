<template>
  <div>
    <h1>Completa aquí el desafío</h1>
  </div>
  <nav>
    <button class="btn-principal" @click="callBurguers()" >Mostrar Hamburguesas Disponibles</button>
    <button class="btn-principal" @click="addMenu()" >Agregar un nuevo Menu</button>
  </nav>
  <BurguerList/>
</template>

<script>
import { mapActions } from 'vuex';
//Clase para crear nuevas hamburguesas
import BurguerList from '../components/BurguerList.vue'
//import {mapGetters} from 'vuex';


export default {
  name: 'Burgers',
  components:{
    BurguerList
  },
  
  methods:{
    ...mapActions([
      'GET_BURGUERS'
    ]),
    callBurguers(){
        this.GET_BURGUERS()
    },
    addMenu(){
      this.$router.push(`/AddBurguer`)
    }
   
    //Metodo para buscar una hamburguesa
    /*searchBurguer(){
      this.filterBurguers = this.burguers.filter((burguer)=>( 
          burguer.nombre.toLowerCase().includes(this.textSearch.toLowerCase())))      
    },*/
    //Metodo para agregar una hamburguesa
    /*addBurguer(){
      //Validacion para no enviar campos vacios
      if(JSON.stringify(this.menu)!='{}'){
        const burguer = this.menu
        this.filterBurguers.push(burguer)
        this.menu = new Burguer()
      }else{
        alert("Se deben completar todos los campos")
      }
    },*/
  
  },
};

</script>

<style lang="css">
.btn-principal{
   background-color: rgba(0, 128, 0, 0.774);
   padding: 10px;
   margin: 20px;
 }
</style>
