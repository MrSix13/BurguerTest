<template>
  <h1>Practica</h1>
  

    <form @submit.prevent="saludo()" class="Caja">
        <input type="text" placeholder="Que quieres buscar?">
        <input type="submit" value="Buscar">
    </form>
    
   
    <div class="container"> 
            <div class="card">
                <table class="card1">
                    <tr class="header">
                        <th>Hamburguesa</th>
                        <th>Actions</th>
                    </tr>
                    <td>Nombre: {{burguer.nombre}} <br> Ingredientes:{{burguer.ingredientes}} <br>Calorias:{{burguer.calorias}}</td>
                    <td>
                        <div>
                            <h1>Edita el Menu</h1>
                            <form class="form_burguer">
                                <input  type="text" placeholder="Nombre"/>
                                <input type="text" placeholder="Ingredientes"/>
                                <input  type="text" placeholder="Calorias"/>
                                <input  type="text" placeholder="ID"/>
                                <button class="boton">Agregar</button>
                            </form>
                        </div>
                    </td>   
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
            'burguer'
        ])
    },
    mounted() {
        this.GET_BURGUER(this.$route.params.id)
        console.log(this.$route.params)
    },
    methods:{
        ...mapActions([
            'GET_BURGUER'
        ])
    },
    
}
</script>





<style lang="css">
.Caja{
    background-color: red;
}
.card{  
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
}

.card1{
    border: 1px solid black;
}

.card1 tr td{
    border: 1px solid black;
    padding: 10px;
}
.boton{
   width: 20%;
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
</style>