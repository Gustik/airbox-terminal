<template>
  <div class="error">
    <h1>Ошибка!</h1>
    <div>
      {{ this.message }}
    </div>
    
    <div class="bottom-nav">
      <router-link to="/" class="button">В начало</router-link>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Error',
  props: {
    message: String
  },
}
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
}

.bottom-nav {
  margin: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>