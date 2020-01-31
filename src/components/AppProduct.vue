<template lang="pug">
    div
        h2 Product title
        .price Price: {{ price }}
        hr 
        button.btn.btn-warning( @click="minus") -1
        button.btn.btn-success( @click="plus")  +1
        input(type="number" :value="cnt" @input="onInput")

</template>

<script>

import { mapMutations}  from "vuex";
import { mapGetters}  from "vuex";

export default {
  data() {
    return {

    }
  }, 
  methods: {
      ...mapMutations(['plus', 'minus']),// импортирует методы plus() {} и minus() {}, которые описаны в mutations
      onInput(e) {
          this.$store.commit('setCnt', e.target.value);
      }
  },
  computed: {
      ...mapGetters([
          "price",
          "cnt"
      ])
  }
}

</script>

<style lang="sass">
button.btn.btn-warning
    margin-right: 20px
    color: #fff
input
    margin-left: 20px
</style>