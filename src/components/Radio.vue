<template lang="pug">
  div
    h1 {{ title }}
    form.form-group
      ul
        li(v-for="item in answers")
          input(:type="type" :value="item" v-model="checked" v-if="type == 'radio'") 
          input(:type="type" :value="item" v-model="selectedUsers" v-else)
          | {{ item }} 
      button.btn.btn-primary(type="submit") Send
</template>

<script>
export default {
  props: ['type', 'title', 'answers'],
  data() {
    return {
      count: 0,
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
  padding: 0
</style>
