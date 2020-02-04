import Vue from "vue";
import Vuex from "vuex";

import cart from "./modules/cart";
import menu from "./modules/menu";
import products from "./modules/products";

Vue.use(Vuex);


export const store = new Vuex.Store({
  modules: {
    cart,
    menu,
    products
  }
});