<template lang="pug">
  div
    h1 {{ title + tick}}
    form.form-group( @submit.prevent="Counter")
      ul
        li(v-for="item in answers")
          input(:type="type" :value="item" v-model="isType") 
          //input(:type="type" :value="item" v-model="selectedUsers" v-else)
          | {{ item }} 
      button.btn.btn-primary(type="submit") Send
</template>

<script>
export default {
  props: ['type', 'title', 'answers', 'count', 'length'],
  data() {
    return {
      tick: 0,
      checked: '',
      selectedAnswers: []
    }
  },
  computed: {
    isType() {
        return (this.type == "radio") ? this.checked : this.selectedAnswers;
    }
  },
  methods: {
    Counter(e) {
      this.tick ++
      this.$emit('clicker', this.tick); 
    }
  }
}
</script>

<style lang="sass" scoped>
ul
  list-style: none
  padding: 0
</style>
