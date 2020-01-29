<template lang="pug">
  div.container
    form.form-group
      radio(v-for="(item, index) in List" :key="index" :type="item.type" :title="item.title" :answers="item.answers")
      button.btn.btn-primary(type="submit") Send
    table.table
      tr
        td
</template>

<script>
import Radio from "./components/Radio";
export default {
  components: { Radio },
  data() {
    return {
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
          title: "Какой из этих тегов строчные?",
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
  mounted() {
    console.log(this.radioList);
  }
}
</script>