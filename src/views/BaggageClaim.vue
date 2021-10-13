<template>
  <div class="baggage-claim">
    <h1>Получение багажа</h1>   
    <h2>Введите пин-код с чека или отсканируйте QR-код</h2>
    <input :value="pin" class="pin-input" type="number">
    <div class="numpad">
      <numpad
        :onInput="onInput"
        :onDelete="onDelete"
        :onReset="onReset"
      />
    </div>
    <div class="bottom-nav">
      <router-link to="/" class="button">Назад</router-link>
    </div>
  </div>
</template>

<script>
import Numpad from "@/components/Numpad.vue"

export default {
  components: { Numpad },
  name: 'BaggageClaim',
  computed: {
  },
  data() {
    return {
      pin: '',
      maxLength: 6,
    }
  },
  methods: {
    onInput(key) {
      if (key == '11') key = '0'
      this.pin = (this.pin + key).slice(0, this.maxLength);
    },
    onDelete() {
      this.pin = this.pin.slice(0, this.pin.length - 1);
    },
    onReset() {
      this.pin = "";
    },
  },
}
</script>

<style scoped>

.baggage-claim {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
}
.pin-input {
  text-align: center;
  font-size: 26px;
  width: 150px;
  margin-bottom: 16px;
}
.numpad {
  width: 350px;
}
.bottom-nav {
  margin: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

</style>