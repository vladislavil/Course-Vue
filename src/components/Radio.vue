<template lang="pug">
  div
    h1 {{ title }}
    ul
      li(v-for="item in answers")
        input(:type="type" :value="item" v-model="checked" v-if="type == 'radio'") 
        input(:type="type" :value="item" v-model="selectedUsers" v-else)
        | {{ item }} 
</template>

<script>
export default {
  props: ['type', 'title', 'answers'],
  data() {
    return {
      checked: '',
      selectedUsers: []
    }
  },
  computed: {
  },
}
</script>

<style lang="sass" scoped>
ul
  list-style: none
</style>
