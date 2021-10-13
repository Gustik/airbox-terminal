<template>
  <div class="select-days">
    <h1>Вы выбрали ячейку № {{ this.$store.state.cell }}</h1>
    <h4>Стоимость за сутки {{ this.$store.state.price }} рублей</h4>
    <div class="container">
      <div class="left-bar">
        <h2>Количество суток</h2>
        <input :value="days" class="days-input" type="number">
        <h2>Итого: {{amount}}</h2>
      </div>
      <div class="numpad">
        <numpad
          :onInput="onInput"
          :onDelete="onDelete"
          :onReset="onReset"
        />
      </div>
    </div>
    <div class="bottom-nav">
      <router-link to="/select-cell" class="button">Назад</router-link>
      <router-link v-if="canNext" to="/phone" class="button" @click="saveDays">Продолжить</router-link>
    </div>
  </div>
</template>
<script>
import Numpad from "@/components/Numpad.vue"

export default {
  components: { Numpad },
  name: 'SelectDays',
  computed: {
    amount: function () {
      if (this.days.length == 0) return 0
      return parseInt(this.$store.state.price) * parseInt(this.days)
    },
    canNext: function () {
      return this.amount > 0
    }
  },
  data() {
    return {
      days: '1',
      maxLength: 3,
    }
  },
  methods: {
    onInput(key) {
      if (key == '11') key = '0'
      this.days = (this.days + key).slice(0, this.maxLength);
    },
    onDelete() {
      this.days = this.days.slice(0, this.days.length - 1);
    },
    onReset() {
      this.days = "";
    },
    saveDays() {
      this.$store.commit('setDays', this.days)
    }
  },
}
</script>

<style scoped>
.select-days {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
}
.left-bar {
  width: 300px;
}
.numpad {
  width: 350px;
}
.days-input {
  text-align: right;
  font-size: 26px;
  width: 150px;
}
.bottom-nav {
  margin: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>