<template lang="pug">
  section
    .container
      .row
        .col.col-sm-12
          app-product(
            @minus="$emit('minus', $event)"
            @plus="$emit('plus', $event)"
          )
</template>

<script>

import AppProduct from "./AppProduct"

export default {
  components: { AppProduct },
  props: ['cnt'],
  data() {
    return {

    }
  }
}

</script>