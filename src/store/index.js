import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        Info: [
            {
              name: 'Name',
              value: '',
              pattern: /^[a-zA-Z]{2,30}$/
            },
            {
              name: 'Phone',
              value: '',
              pattern: /^[0-9]{6,30}$/
            },
            {
              name: 'Email',
              value: '',
              pattern: /.+/
            },
            {
              name: 'Some field 1',
              value: '',
              pattern: /.+/
            },
            {
              name: 'Some field 2',
              value: '',
              pattern: /.+/
            }
        ],
    },
    mutations: {
        Info(state, payload) {
            state.Info[payload.ind].value = payload.dt;
        }
    },
    getters: {
        info(state) {
            return state.Info;  
        }, 
        name(state) {
            return state.Info[0].value
        }
    },
});