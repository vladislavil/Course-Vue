<template lang="pug">
    label {{ name }}
        i.fa(v-if="this.value !== ''" :class="doneValide")
        input(type='text', id='' :value='value' @input="onInput($event)")
</template>

<script>
export default {
  props: ['name', 'value', 'pattern'],
  data() {
    return {
      isValide: false,
      //isValide: this.value !== ''
    }
  },
  computed: {
    doneValide() {
      return this.pattern.test(this.value)
              ? 'fa-check-circle'
              : 'fa-exclamation-circle'
    }
  },
  methods: {
    onInput(e) {
      //this.isValide = true;
      this.isValide = this.pattern.test(e.target.value); 
      this.$emit('inp', {
        val: e.target.value,
        valid:  this.pattern.test(e.target.value)
      })
    }
  }
} 
</script>
