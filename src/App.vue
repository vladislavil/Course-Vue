<template lang="pug">
  div
    form.form-group(action='', @submit.prevent='formSubmited = true', v-if='!formSubmited')
      div.progress
        div.progress-bar(role='progressbar', :style="'width:' + progressWidth + '%'", :aria-valuenow="progressWidth + '%'", aria-valuemin='0', aria-valuemax='100')
      my-input(v-for='(item, index) in Info', :key='index', :name='item.name', :value='item.value', :pattern='item.pattern', @input='onInput(index, $event)')
      button.btn.btn-primary(type='submit', :disabled='done < Info.length') Submit
    table.table(v-if='formSubmited')
      tr(v-for='(item, index) in Info', :key='index')
        td {{ item.name }}
        td {{ item.value }}
</template>

<script>

import MyInput from './components/MyInput';

export default {
  components: { MyInput },
  data() {
    return {
      formSubmited: false,
      done: 0,
      controls: [],
      Info: [
        {
          name: 'Name',
          value: '',
          pattern: /^[a-zA-Z]{2,30}$/
        },
        {
          name: 'Phone',
          value: '',
          pattern: /^[0-9]{2,30}$/
        },
        {
          name: 'Email',
          value: '',
          pattern: /.+/
        },
        {
          name: 'Some field 1',
          value: '',
          pattern: /.+/
        },
        {
          name: 'Some field 2',
          value: '',
          pattern: /.+/
        }
      ],
    }
  },
  created() {
      for(let i = 0; i < this.Info.length; i++) {
          this.controls.push(false);
      }
  },
  methods: {
    onInput(index, data) {
      this.Info[index].value = data.value;
      this.controls[index] = data.valid;

      let done = 0;

      for(let i = 0; i < this.Info.length; i++) {
        if(this.controls[i]) {
          done++;
        }
      }
          this.done = done;
    }
  },
  computed: {
    progressWidth() {
      return (100 / this.Info.length * this.done);
    }
  }
}

</script>

<style>
  .fa {
    font-family: "Solid";
  }
  .fa-exclamation-circle {
    color: red;
  }
  .fa-check-circle {
    color: green;
  }
  input, label, form {
    display: block;
  }
  input {
    width: 100%;
  }
  form {
    max-width: 400px;
    margin: 0 auto;
  }
</style>