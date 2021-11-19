<template>
  <h1>Detalle Hamburguesa</h1>   
    <div class="container"> 
            <div class="card">
                <table class="card1">
                    <tr class="header">
                        <th>Hamburguesa</th>
                        <th>Actions</th>
                    </tr>
                    <td>
                        
                        <pre>{{burguer[0]}}</pre>
                        <div class="edit_container">
                            <h1>Edita el Menu</h1>
                            <form class="form_burguer">
                                <input  type="text" placeholder="Nombre"/>
                                <input type="text" placeholder="Ingredientes"/>
                                <input  type="text" placeholder="Calorias"/>
                                <input  type="text" placeholder="ID"/>
                                <button @click="handleSubmit()" class="boton">Agregar</button>
                            </form>
                        </div>
                    </td> 
                    <td><button class="boton" @click="handleEdit()">Editar</button></td>
                </table>    
            </div>     
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
    name:'Practica',
    computed:{
        ...mapGetters([
            'burguer',
        ])
    },
    mounted() {
        this.GET_BURGUER(this.$route.params.id)
    },
    methods:{
        ...mapActions([
            'GET_BURGUER',
            'EDIT_BURGUER'
        ]),
        handleSubmit(){
            console.log("click")
        },
        handleEdit(){
            const a = document.querySelector('.edit_container')
            console.log(a)
            a.classList.toggle("show")
        }
    },
    
}
</script>





<style lang="css">

.card{  
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
}

.card1{
    border: 1px solid black;
}

.card1 td span{
    font-size: 1.5rem;
    font-weight: bold;
}
.boton{
   width: 50%;
   border-radius: 100%;
   margin: 5px 5px;
}
.botones{
    border-bottom: 1px solid black;
    margin-top: 23px;
}
.botones input{
    padding: 10px;
}
.container{
    font-family: sans-serif;
    font-size: 1.5rem;
}
.header th{
    border-bottom: 1px solid black;
}
.edit_container{
    display: none;
}
.show{
    display: block;
}
p{
    font-weight: bold;
}
</style>