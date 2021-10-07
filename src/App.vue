<template>
  <div id="header">
    <table>
      <tr>
      <td><img alt="Vue logo" src="@/assets/logo.svg"  width="300" ></td>
      <td><LocaleSwitcher /></td>
      </tr>
    </table>
  </div>
  <div id="main">
    <router-view/>
  </div>
  <div id="footer">
    2021
  </div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

export default {
  name: 'App',
  components: {
    LocaleSwitcher
  },
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


<style>
html, body, #app {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
}

.button {
    background-image: linear-gradient(180deg, #345B99 0%, #093479 100%);
    border-radius: 5px;
    display: inline-flex;
    height: 56px;
    padding: 0 20px;
    color: white;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease-out;
    text-align: center;
    text-decoration: none;
    border: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
    flex-direction: column;
}

#header {
  padding: 30px;
  height: 75px;
}

#main {
  flex: auto;
  background: #ECEFF5;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

#footer {
  padding: 30px;
  height: 75px;
}

</style>
