<template lang="pug">
  div
    my-header( :cnt="cnt")
    my-content( @minus="onMinus"
                @plus="onPlus")

</template>

<script>

import MyContent from "./components/Content";
import MyHeader from "./components/Header"

export default {
  components: { MyContent, MyHeader },
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
