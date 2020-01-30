<template lang="pug">
  div.container
    radio(v-for="(item, index) in List" 
          :key="index" 
          :type="item.type" 
          :title="item.title" 
          :answers="item.answers" 
          :length="List.lenth"
          :count="count"
          v-show="count == index" 
          @clicker="counter($event)")
    table.table(v-if="done")
      tr
        td {{ done }}
</template>

<script>
import Radio from "./components/Radio";
export default {
  components: { Radio },
  data() {
    return {
      done: false,
      count: 0,
      index: [],
      List: [
        {
          type: "radio",
          title: "Какой тег задает ссылку?",
          answers: [
            'a', 
            'div', 
            'span', 
            'img'
          ]
        },
        {
          type: "checkbox",
          title: "Какие из этих тегов строчные?",
          answers: [
            'a', 
            'div', 
            'span', 
            'img'
          ]
        }
      ],
    }  
  },
  methods: {
    counter(data) {
      (this.count == (this.List.length - 1)) ? this.done = true : this.count = data;
      console.log(this.done)
    }
  },
}
</script>