
import { createStore } from 'vuex'

const store = createStore({
    state:{
        titles: ["#", "Burguer Name", "calories","Actions"],
        burguers: [],
        burguer: [],
        prueba:[]
    
    },
    getters:{
        title: state => state.title,
        burguers: state => state.burguers,
        burguer: state => state.burguer,
        titles: state=>state.titles,
        prueba: state => state.prueba
    },
    mutations:{
        SET_BURGUERS(state,burguers){
            state.burguers = burguers
        },
        SET(state, burguers){
            state.prueba = burguers
        },
        SET_BURGUER(state, burguer ){
            state.burguer =burguer
            console.log(state.burguer)
        },
        SET_ADD_BURGUER(state,burguer){
         console.log(state.burguers)
        state.prueba.push(burguer)
        },
        SET_EDIT_BURGUER(state,burguer,id){
            console.log(burguer)
            console.log(id)
            const a = state.burguers.filter(e=>e.id == id)
            console.log(a)
            
        }
        
    },
    actions:{
        async GET_BURGUERS({commit}){
            try {
                const res = await fetch('https://prueba-hamburguesas.herokuapp.com/burger/')
                const data = await res.json();
                commit('SET_BURGUERS', data)
                commit('SET',data)
            } catch (error) {
                console.log("Hubo un error con las hamburguesas")
            }
        },
        async GET_BURGUER({commit}, id){
            try{
                //const res = await fetch('https://prueba-hamburguesas.herokuapp.com/burger/' + id)
                //const data = await res.json();
                const data = this.state.burguers
                const b = data.filter((e)=> e.id == id)
                commit('SET_BURGUER', b)
            }catch(error){
                console.log(error)
            }
        },
        ADD_BURGUER({commit}, burguer){
            console.log(burguer)
            commit('SET_ADD_BURGUER', burguer)
        },
        EDIT_BURGUER({commit},burguer,id){
            commit('SET_EDIT_BURGUER', burguer, id)
        }

    }
});

export default store;