<template lang="pug">
    div 
        h1 Cart
        hr
        div.alert.alert-warning(v-if="empty") You cart is empty
        table.table(v-else) 
            tr
                td Товар
                td Цена
            tr(v-for="(product, index) in products" :key="index")
                td {{ product.title }}
                td {{ product.price }}
</template>

<script>

import {mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters('products', {
                productsAll: 'items'
            }),
            ...mapGetters('cart', {
                productsinCart: 'products'
            }),
            products() {
                return this.productsAll.filter((elem) => {
                   return this.productsinCart.indexOf(elem.id_product) !== -1;
                })
            },
            empty() {
                return this.products.length === 0
            }
        },
    }
</script>