<template>
  <div class="pay-method">
    <h1>Выберите метод оплаты</h1>
    
    <div class="container">
      <div class="left-bar">
        <h3>Вы выбрали ячейку № {{cell}}</h3>
        <h3>Количество суток хранения: {{days}}</h3>
        <h3>Общая стоимость: {{amount}}</h3>
        <h3>Контактный телефон: +{{phone}}</h3>
      </div>
      <div class="methods">
        <br>
        <router-link to="/pay-card" class="button main-button">Банковской картой</router-link>
        <router-link to="/pay-cash" class="button main-button">Наличными</router-link>
      </div>
    </div>
    <div class="bottom-nav">
      <router-link to="/phone" class="button">Назад</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayMethod',
  computed: {
    canNext() {
      return false
    },
    cell() {
      return this.$store.state.cell
    },
    days() {
      return this.$store.state.days
    },
    amount() {
      return this.$store.state.days * this.$store.state.price 
    },
    phone() { return this.$store.state.phone }
  },
  data() {
    return {
      phoneNumber: '7',
      maxLength: 11,
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>

.pay-method {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
}

.container {
  display: flex;
}
.left-bar {
  width: 350px;
}
.methods {
  display: flex;
  flex-direction: column;
  width: 300px;
}
.bottom-nav {
  margin: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.main-button {

  font-size: 20px;
  margin-bottom: 30px;
}
</style>