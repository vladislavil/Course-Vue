<template lang="pug">
  div
    my-header(:name="name" v-if="formSubmited")
    form.form-group(action='', @submit.prevent='formSubmited = true', v-if='!formSubmited')
      div.progress
        div.progress-bar(role='progressbar', :style="'width:'+ styleWidth", :aria-valuenow="styleWidth", aria-valuemin='0', aria-valuemax='100')
      my-input(v-for="(item, index) in info" :key='index' :name='item.name' :value='item.value' :pattern='item.pattern' @inp="onInput(index, $event)")
      button.btn.btn-primary(type='submit' :disabled="done < info.length") Submit
    table.table(v-if='formSubmited')
      tr(v-for="(item, index) in info" :key="index")
        td {{ item.name }}
        td {{ item.value }}
</template>

<script>

import MyInput from './components/MyInput';
import myHeader from "./components/Header"
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  components: { MyInput, myHeader },
  data() {
    return {
      done: 0,
      formSubmited: false,
      validStatus: []
    }
  },
  computed: {
      ...mapGetters(['info','name']),
      styleWidth() {
        return this.done * 100 / this.info.length + '%'
      }
  },
  created() {
    for(let i = 0; i < this.info.lenth; i++) {
        this.validStatus[i].push(false);
    }
  },
  methods: {
    onInput(index, data) {
      this.validStatus[index] = data.valid;
      this.$store.commit('Info', {
          ind: index,
          dt: data.val
      });

      let done = 0;

      console.log(this.validStatus)
      for(let i = 0; i < this.info.length; i++) {
        if(this.validStatus[i]) {
          done++;
        }
      }

      console.log(done)

      this.done = done;
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