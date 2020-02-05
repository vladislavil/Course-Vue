<template lang="pug">
    div 
        h1 Cart
        hr
        div.alert.alert-warning(v-if="empty") You cart is empty
        template(v-else)
            table.table.table-bordered.table-hover
                thead
                    tr
                        th Товар
                        th Цена
                tbody
                    tr(v-for="(product, index) in products" :key="index")
                        td {{ product.title }}
                        td {{ product.price }}
            button.btn.btn-success( @click="onOrder") Order now
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
        methods: {
            onOrder() {
                this.$router.push('/checkout')
            }
        }
    }
</script>