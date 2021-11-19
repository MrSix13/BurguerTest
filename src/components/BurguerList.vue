<template>
  <div class="table_container">
        <table>
            <thead>
                <th v-for="(title, index) in titles" :key="index">
                {{title}}
            </th>
            </thead>
            <tbody>
                <tr class="a" v-for="(burguer, index) in burguers" :key="burguer.id">
                <td>{{index}}</td>
                <td><router-link @click="edit(burguer.id)"  class="link" to="/Burguer/:id">{{burguer.nombre}}</router-link></td>
                <td>{{burguer.calorias}}</td>
                <td>
                <button class="deleted" @click="deleted(index)" >Eliminar</button>
                <button class="edit" @click="edit(burguer.id)" >Editar</button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>  
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
 name: 'BurguerList',
 computed:{
     ...mapGetters([
         'titles',
         'burguers',
         'burguer',
         'prueba'
     ]),
 },
mounted() {
   //this.GET_BURGUERS()
     
 },
 methods:{
     ...mapActions([
         'GET_BURGUERS',
         'GET_BURGUER'
     ]),
     //Metodo para eliminar una hamburguesa
     deleted(index){
         confirm("Esta seguro de eliminar esta hamburguesa?") ? this.burguers.splice(index,1) : console.log("No se elimino la hamburguesa")
     },
     //Metodo para editar una hamburguesa 
     edit(id){
          this.$router.push(`/Burguer/${id}`)
         
     }
     
 }
}
</script>

<style lang="css">
.table_container{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    border: 1px solid black;
    color: rgb(255, 255, 255);
    border-radius: 3%;
    font-size: 1.3rem;
    background-color: rgb(73, 124, 126)
 }
 .deleted{
   background-color: rgba(231, 4, 4, 0.774);
 }
 .edit{
   background-color: rgba(3, 139, 3, 0.76);
 }
 button{
    border-radius: 15px;
    border: none;
    font-size: 22px; 
 }
 
 .table thead th{
   border-bottom: 2px solid rgb(255, 255, 255);
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
 .link{
   text-decoration: none;
   color: rgba(255, 255, 255, 0.979);

 }
@media (max-width: 600px) {
  .table_container {
    font-size: 15px;
  }
  button{
    font-size: 18px;
    margin-left: 10px;
  }
}
   
</style>