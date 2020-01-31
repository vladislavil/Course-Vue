<template lang="pug">
  div
    my-header
    my-content
</template>

<script>

import MyContent from "./components/Content";
import MyHeader from "./components/Header"

export default {
  components: { MyContent, MyHeader }
}
</script>
