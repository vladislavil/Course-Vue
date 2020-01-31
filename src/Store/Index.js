import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: { //переменные и их значения
        cnt: 0,
        price: 1000
    },
    mutations: { // методы для изменения state переменных
        minus(state) {
            if(state.cnt > 0) {
              state.cnt--;
            }
        },
        plus(state) {
            state.cnt++;
        },
    },
    getters: {
        cnt(state) {
            return state.cnt;
        },
        price(state) {
            return state.price;
        },
        total(state) {
            return state.price * state.cnt;
        }
    },
    //strict: true //данные можно изменять только через мутациии. На продакшн сборке нужно false
    strict: process.env.NODE_ENV !== 'production' //для того, чтобы при продакшн сборке автоматически возвращалось false, а при dev - true
});