<template lang="pug">
    div 
        h1 Product page
        hr
        .alert.alert-success 
            h3 {{product.title}}
            div {{ product.price}}
</template>

<script>

    export default {
        computed: {
            id() {
                return this.$route.params.id;
            },
            product() {
                return this.$store.getters['products/item'](this.id);
            }
        }
    }
</script>