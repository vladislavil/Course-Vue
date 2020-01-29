<template lang="pug">
  div.container
    radio(v-for="(item, index) in List" :key="index" :type="item.type" :title="item.title" :answers="item.answers")
    table.table
      tr
        td
</template>

<script>
import Radio from "./components/Radio";
export default {
  count: 0,
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
  }
}
</script>