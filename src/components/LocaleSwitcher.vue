<template>
<ul>
  <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
    {{locale}}
  </li>
</ul>
</template>

<script>
export default {
  name: 'LocaleSwitcher',
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    }
  },
  data() {
    return {
      locales: ['en', 'ru']
    }
  }
}
</script>

<style scoped>
li {
  text-decoration: underline;
  color: #459CE7;
  cursor: pointer;
}
</style>