<template>
  <div class="pay-card">
    <h1>Ячейка № {{ this.$store.state.cellName }}</h1>
    <h2>К оплате {{ amount }}</h2>
    <h3>Вставьте карту</h3>
    <div class="bottom-nav">
      <router-link to="/pay-method" class="button">Назад</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayCard',
  computed: {
    amount() {
      return this.$store.state.days * this.$store.state.price 
    },
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.pay-card {
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