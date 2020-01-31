import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//vuex используется для хранения данных, с которыми нужно работать в нескольких компонентах

export const store = new Vuex.Store({
    state: { //переменные и их значения
        cnt: 0,
        price: 1000,
        orderState: null
    },
    mutations: { // методы для изменения state переменных //принято оборачивать в actions
        minus(state) {
            if(state.cnt > 0) {
              state.cnt--;
            }
        },
        plus(state) {
            state.cnt++;
        },
        orderDone(state) {
            state.orderState = 'done'
        },
        orderSend(state) {
            state.orderState = 'pending'
        },
        setCnt(state, payload) {
            if(payload < 0) {
                payload = 0;
            }
            state.cnt = payload;
        }
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
        },
        orderState(state) {
            return state.orderState;
        }
    },
    actions: { // для обращения к сторонним АПИ
        sendOrder(store) {
            store.commit('orderSend');

            setTimeout(() => {
                store.commit('orderDone');
            }, 1000);
        }
    },
    //strict: true //данные можно изменять только через мутациии. На продакшн сборке нужно false
    strict: process.env.NODE_ENV !== 'production' //для того, чтобы при продакшн сборке автоматически возвращалось false, а при dev - true
});