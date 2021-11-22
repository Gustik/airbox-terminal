<template>
  <div class="print">
    <h1>Возьмите чек</h1>
    <div>
      Платеж успешно проведен. Ячейка №{{ this.$store.state.cellName }} открыта.
    </div>
    
    <div class="bottom-nav">
      <router-link to="/" class="button">Завершить</router-link>
    </div>
  </div>
</template>
<script>
import api from '@/api'

export default {
  name: 'Print',
  props: {
    paymentType: String
  },
  created() {
    this.print()
  },
  methods: {
    async print() {
      const days = this.$store.state.days
      const cellName = this.$store.state.cellName
      //const cellId = this.$store.state.cellId
      const price  = this.$store.state.price
      const phone = this.$store.state.phone
      await api.pc_printer_print(this.paymentType, cellName, price, days, phone)
      await api.pc_session_close()
    }
  },
}
</script>

<style scoped>
.print {
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