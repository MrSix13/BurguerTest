
import { createStore } from 'vuex'

const store = createStore({
    state:{
        title:"vuex store1",
        burguers: [],
        burguer: []
    },
    getters:{
        title: state => state.title,
        burguers: state => state.burguers,
        burguer: state => state.burguer
    },
    mutations:{
        SET_BURGUERS(state,burguers){
            state.burguers = burguers
        },
        SET_BURGUER(state, burguer ){
            state.burguer = burguer
        }
    },
    actions:{
        async GET_BURGUERS({commit}){
            const res = await fetch('https://prueba-hamburguesas.herokuapp.com/burger/')
            const data = await res.json();
            commit('SET_BURGUERS', data)
        },
        async GET_BURGUER({commit}, id){
            const res = await fetch('https://prueba-hamburguesas.herokuapp.com/burger/' + id)
            const data = await res.json();
            commit('SET_BURGUER', data)
        }
    }
});

export default store;