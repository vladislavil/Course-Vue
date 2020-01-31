<template lang="pug">
  section
    .container
      .row
        .col.col-sm-12
          app-product
          hr
          button.btn.btn-primary( :disabled="btnDisabled" @click="onOrder") Order now
          hr
          .alert.alert-success( v-if="orderState == 'done'") You order is done!
</template>

<script>

import AppProduct from "./AppProduct"
import {mapGetters} from 'vuex';


export default {
  components: { AppProduct },
  computed:  { 
    ...mapGetters(['cnt', 'orderState']), //короткая форма обращения к store
    btnDisabled() {
      return this.cnt < 1 || this.orderState !== null;
    }
  },
  methods: {
    onOrder() {
      this.$store.dispatch('sendOrder');
    }
  }
}

</script>
