<template lang="pug">
  div
    header
      .container
        .row
          .col.col-sm-12
            h1 Site
            app-cart(:cnt="cnt" )
    section
      .container
        .row
          .col.col-sm-12
            app-product(
              @minus="onMinus"
              @plus="onPlus"
            )

</template>

<script>

import AppProduct from "./components/AppProduct";
import AppCart from "./components/AppCart"

export default {
  components: { AppCart, AppProduct },
  data() {
    return {
        cnt: 0,
    }
  },
  methods: {
    onMinus() {
      if(this.cnt > 0) {
        this.cnt--;
      }
    },
    onPlus() {
        this.cnt++;
    }
  }
}
</script>
