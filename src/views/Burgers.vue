<template>
  <div>
    <h1>Completa aquí el desafío</h1>
  </div>
  <div class="search">
    <span>Busca tu Hamburguesa</span>
    <input
      type="text"
      class="buscador"
      placeholder="Burguer name"
      v-model="textSearch"
      @keyup="searchBurguer()"
      autofocus
    />
  </div>
  <div class="table_container">
    <table class="table">
      <thead>
        <th v-for="(title, index) in titles" :key="index">
          {{title}}
        </th>
      </thead>
      <tbody>
        <tr v-for="(burguer, index) in filterBurguers" :key="burguer.id">
          <td>{{index}}</td>
          <td>{{burguer.nombre}}</td>
          <td>{{burguer.calorias}}</td>
          <td>
            <button @click="deleteBurguer(burguer.id)" >Eliminar</button>
            <button @click="editBurguer(burguer.id)" >Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <h1>Agrega un nuevo Menu</h1>
    <form @submit.prevent="addBurguer" class="form_burguer">
      <input v-model="menu.nombre" type="text" placeholder="Nombre"/>
      <input v-model="menu.ingredientes" type="text" placeholder="Ingredientes"/>
      <input v-model="menu.calorias" type="text" placeholder="Calorias"/>
      <input v-model="menu.id" type="text" placeholder="ID"/>
      <button class="boton">Agregar</button>
    </form>
  </div>
</template>

<script>
//Clase para crear nuevas hamburguesas
class Burguer{
  constructor(id,nombre,ingredientes,calorias){
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.calorias = calorias;
  }
}
export default {
  name: 'Burgers',
  data(){
    return{
      burguers: [],
      filterBurguers: [],
      titles: ["#", "Burguer Name", "calories"],
      textSearch: "",
      menu: new Burguer()
    };
  },
  async mounted() {
    const res = await fetch('https://prueba-hamburguesas.herokuapp.com/burger/')
    const data = await res.json();
    this.burguers = data;
    this.filterBurguers = data;
  },
  methods:{
    //Metodo para buscar una hamburguesa
    searchBurguer(){
      this.filterBurguers = this.burguers.filter((burguer)=>( 
          burguer.nombre.toLowerCase().includes(this.textSearch.toLowerCase())))      
    },
    //Metodo para agregar una hamburguesa
    addBurguer(){
      if(JSON.stringify(this.menu)!='{}'){
        const burguer = this.menu
        this.filterBurguers.push(burguer)
        this.menu = new Burguer()
      }else{
        alert("Se deben completar todos los campos")
      }
    },
    //Metodo para eliminar una Hamburguesa
    deleteBurguer(id){
        let remove = id
        this.filterBurguers = this.filterBurguers.filter((burguer)=>{ return burguer.id !== remove})
    },
    //Metodo para editar una hamburguesa
    editBurguer(id){
      console.log("editar")
      console.log(id)


      this.$router.push('Practica')
    }
  },
};

</script>

<style lang="css">
 .table_container{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    border: 1px solid black;
    color: white;
    font-size: 1.3rem;
    background-color: rgba(0, 0, 0, 0.863);
 }
 .table thead th{
   border-bottom: 2px solid white;
 }
 .search{
   display: flex;
   justify-content: center;
 }
 .form_burguer{
   display: flex;
   flex-direction: column;
   width: 80%;
   align-items: center;
 }
</style>
