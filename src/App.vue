<template>
  <div id="header">
    <table>
      <tr>
      <td><img alt="Vue logo" src="@/assets/logo.jpg"  width="300" ></td>
      <td><LocaleSwitcher /></td>
      </tr>
    </table>
  </div>
  <div id="main">
    <router-view/>
  </div>
  <div id="footer">
    Бесплатная автоматическая справочная (4112) 31-88-44 <br>
    email: office@yks.aero
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
    color: white;
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
  background-color: rgb(32, 37, 55);
  background: url('~@/assets/background.png') repeat-y;
}

#header {
  padding: 20px;
  height: 150px;
  background: #202537;
}

#main {
  display: flex;
  
  flex-direction: column;
  align-content: center;
  padding: 30px;
  align-items: center;
  flex: auto;
  justify-content: center;
}

#footer {
  padding: 30px;
  height: 75px;
  background: #202537;
  color: white;
  font-size: 20px;
}

</style>
