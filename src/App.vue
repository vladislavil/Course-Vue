<template lang="pug">
  div
    header
      .container
        .row
          .col.col-sm-9
            h1 Site 
          .col.col-sm-3
            .alert.alert-default
              div In Cart: {{ cartCount }}
        hr
    section
      .container
        .row
          .col.col-sm-3.menu
            ul.list-group 
            router-link(v-for="(item, index) in menuList" :key="index" :to="item.url" tag="li" class="list-group-item" active-class="active")
              a {{item.text}}
          .col.col-sm-9
            transition(name="slide" mode="out-in")
              router-view
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  data() {
    return {

    }
  },
  computed: {

    ...mapGetters('menu', {
        menuList: 'items'
    }),

    ...mapGetters('cart', {
        cartCount: 'cnt'
    }),
    // items() { 
    //   return this.$store.getters['menu/items']
    // }
  }
}

</script>

<style lang="sass" scoped>
a
  display: block
  width: 100%
  height: 100%
  padding: .75rem 1.25rem

.menu
  border-right: 1px solid #ddd

.list-group-item
  transition: background 0.3s, color 0.3s
  padding: 0

.list-group-item a
  text-decoration: none 

.list-group-item.active a 
  color: inherit

.slide-enter

.slide-enter-active 
  animation: slideIn 0.5s

.slide-enter-to

.slide-live 

.slide-live-active 
  animation: slideOut 0.5s

@keyframes slideIn
  from
    transform: rotateY(90deg)
  to
    transform: rotateY(0deg)

@keyframes slideOut
  from
    transform: rotateY(0deg)
  to
    transform: rotateY(90deg)


</style>
