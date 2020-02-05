<template lang="pug">
    div 
        h1 Products
        .row
            .col.col-sm-4( v-for="product in products" )
                router-link( :to="'/products/' + product.id_product" tag="h3") 
                    a {{ product.title }}
                div 
                    | {{ product.price }}
                button.btn.btn-primary( v-if="inCart.indexOf(product.id_product) === -1" @click="addToCart(product.id_product)" ) Add to cart
                button.btn.btn-warning( v-else  @click="removeCart(product.id_product)" ) Remove to cart
</template>

<script>

    import {mapGetters} from "vuex";
    import {mapActions} from "vuex";

    export default {
        computed: {
            ...mapGetters('products', {
                products: 'items'
            }),
             ...mapGetters('cart', {
                inCart: 'products'
            })
        },
        methods: {
            ...mapActions('cart', {
                addToCart: 'add',
                removeCart: 'remove'
            })
        }
    }

</script>

<style lang="sass" scoped> 

.row
    padding-left: 15px

button.btn-primary,
button.btn-warning
    color: #fff
    display: block
    margin: 10px 0

</style>