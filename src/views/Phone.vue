<template>
  <div class="phone">
    <h1>Введите номер телефона</h1>
    <span class="phone-box">
      +<input :value="phoneNumber" class="phone-input">
    </span>
    <div class="numpad">
      <numpad
        :onInput="onInput"
        :onDelete="onDelete"
        :onReset="onReset"
      />
    </div>
    
    <div class="bottom-nav">
      <router-link :to="{ name: 'SelectDays', params: { id: $route.params.id, price: $route.params.price }}" class="button">Назад</router-link>
      <router-link v-if="canNext" to="/select-days" class="button">Продолжить</router-link>
    </div>
  </div>
</template>
<script>
import Numpad from "@/components/Numpad.vue"

export default {
  components: { Numpad },
  name: 'Phone',
  computed: {
    canNext: function () {
      return this.phoneNumber.length == this.maxLength
    }
  },
  data() {
    return {
      phoneNumber: '7',
      maxLength: 11,
    }
  },
  methods: {
    onInput(key) {
      if (key == '11') key = '0'
      this.phoneNumber = (this.phoneNumber + key).slice(0, this.maxLength);
    },
    onDelete() {
      this.phoneNumber = this.phoneNumber.slice(0, this.phoneNumber.length - 1);
    },
    onReset() {
      this.phoneNumber = "";
    }
  },
}
</script>

<style scoped>
.phone-box {
  font-size:30px;
}
.phone {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
}

.numpad {
  width: 350px;
}
.phone-input {
  font-size: 26px;
  width: 180px;
  margin-bottom: 30px;
}
.bottom-nav {
  margin: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>