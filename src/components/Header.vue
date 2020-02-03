<template lang="pug">
    div(style="margin-bottom: 40px")
        h1 Site title
        h3 Hello, {{ name }}
</template>

<script>
    export default {
        props: ['name']
    }
</script>