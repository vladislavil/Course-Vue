<template lang="pug">
  header
    .container
      .row
        .col.col-sm-12
          h1 Site
          app-cart
</template>

<script>

import AppCart from "./AppCart"

export default {
  props: ['cnt'],
  components: { AppCart },
  data() {
    return {

    }
  }
}

</script>