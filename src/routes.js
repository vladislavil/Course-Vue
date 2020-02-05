import Vue from 'vue';
import VueRouter from 'vue-router';

import ProductList from './components/ProductList';
import Product from './components/Product';
import Cart from './components/Cart';
import E404 from './components/E404';
import Checkout from './components/Checkout';

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: {
            name: 'products'
        }
    },
    {
        name: 'products',
        path: '/products',
        component: ProductList
    },
    {
        path: '/products/:id',
        component: Product
    },
    {
        path: '/cart',
        component: Cart
    },
    ,
    {
        path: '*',
        component: E404
    },
    {
        path: '/checkout',
        component: Checkout
    },
];

export const router = new VueRouter({
    routes: routes,
    mode: "history",
});