<template lang="pug">
  div 
    div Quantity: {{ cnt }}
    div Total price: {{ total }}
</template>

<script>
import {mapGetters} from 'vuex';
// import {mapState} from 'vuex';
// import {mapActions} from 'vuex';
// import {mapMutations} from 'vuex';

export default {
  data() {
    return {

    }
  },
  // computed: {
  //   cnt() {
  //     //return this.$store.state.cnt; // через state не принято получать поля. Нужно через getters
  //     return this.$store.getters.cnt;
  //   },
  //   total() {
  //     return this.$store.getters.total;
  //   }
  // }

  computed: mapGetters(['cnt', 'total']) //короткая форма обращения к store
}

</script>