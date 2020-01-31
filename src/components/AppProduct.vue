<template lang="pug">
    div
        h2 Product title
        .price 1000
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
        this.$emit('minus')
      },
      onPlus() {
        this.$emit('plus')
      }
  }
}

</script>

<style lang="sass">
button.btn.btn-warning
    margin-right: 20px
    color: #fff
</style>