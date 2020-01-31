<template lang="pug">
    div
        h2 Product title
        .price Price: {{ price }}
        hr 
        button.btn.btn-warning( @click="onMinus") -1
        button.btn.btn-success( @click="onPlus")  +1

</template>

<script>

export default {
  data() {
    return {

    }
  }, 
  methods: {
    onMinus() {
      this.$store.commit('minus');
    },
    onPlus() {
      this.$store.commit('plus');
    }
  },
  computed: {
      price() {
          return this.$store.getters.price
      }
  }
}

</script>

<style lang="sass">
button.btn.btn-warning
    margin-right: 20px
    color: #fff
</style>