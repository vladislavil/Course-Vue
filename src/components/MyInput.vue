<template lang="pug">
    label {{name}}
        i.fa( :class='vlaidClass', v-if='activated')
        input(type='text', id='', :value='value', @input='onInput')
</template>

<script>
export default {
    props: ['name', 'value', 'pattern'],
    data() {
      return {
        activated: this.value !== ""
      }
    },
    computed: {
        vlaidClass(){
          return this.pattern.test(this.value) ?
            'fa-check-circle' :
            'fa-exclamation-circle';
        }
    },
    methods: {
      onInput(e) {
          this.activated = true;
          this.$emit('input', {
            value: e.target.value,
            valid: this.pattern.test(e.target.value)
      })
    }
  }
}
</script>
