<template>
  <div class="home">
    <HelloWorld msg="message.hello"/>
  
    <router-link to="/select-cell" class="button">Арендовать ячейку</router-link> <br>
    <router-link to="/about" class="button">Получить багаж</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
