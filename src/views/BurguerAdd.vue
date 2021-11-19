<template>
   <div>
    <h1>Agrega un nuevo Menu</h1>
    <form @submit.prevent="addBurguer" class="form_burguer">
        <input v-model="nombre" type="text" placeholder="Nombre"/>
      <input v-model="ingredientes" type="text" placeholder="Ingredientes"/>
      <input v-model="calorias" type="text" placeholder="Calorias"/>
      <input v-model="id" type="text" placeholder="ID"/>
      <button class="boton">Agregar</button>
    </form>
  </div>
</template>

<script>

 import {mapGetters} from 'vuex';
 import {mapActions} from 'vuex';

export default {
    name: 'BurguerAdd',
    computed:{
        ...mapGetters([
          'burguers'
        ])
    },
    date(){
        return{

              nombre:"",
              ingredientes:"",
              calorias: "",
              id: ""
        }
    },
    methods:{
      ...mapActions([
        'ADD_BURGUER'
      ]),
        addBurguer(){
            console.log("enviando datos")
            const dato = {id: this.id, nombre: this.nombre, ingredientes:[this.ingredientes], calorias:this.calorias}
            console.log(dato)
            //const dato = {id: "Z", nombre:"nombreX", ingredientes:[], calorias:13}
            this.ADD_BURGUER(dato)
            this.$router.push(`/hamburguesas`)
        },
    }
}
</script>

<style>
.form_burguer{
  border: 1px solid black;
  margin: auto ;
  border-radius: 20px;
  background-color: cadetblue;
}
.form_burguer input{
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
}
.boton{
  background-color: rgba(2, 202, 2, 0.726);
  border-radius: 20px;
  padding: 10px;
}
</style>