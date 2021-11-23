<template>
  <div class="pay-cash">
    <h1>Ячейка № {{ this.$store.state.cellName }}</h1>
    <h2>К оплате {{ amount }}</h2>
    
    <h3>Внесите наличные</h3>

    <h2>Принято {{ totalAmount }}</h2>
    <div class="bottom-nav">
      <router-link to="/pay-method" class="button">Назад</router-link>
      <div v-if="isFinished" class="button" @click="pay">Оплатить</div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'PayCash',
  computed: {
    amount() {
      return this.$store.state.days * this.$store.state.price 
      //return 100
    },
  },
  data() {
    return {
      isFinished: false,
      totalAmount: 0
    }
  },
  created() {
    this.start()
  },
  methods: {
    timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async start() {    
      const sessionOpen = await api.pc_session_open()
      const validatorStart = await api.pc_validator_start()
      console.log(sessionOpen)
      console.log(validatorStart)
      
      while(!this.isFinished) {
        const status = await api.pc_get_status_validator()
        const session = status.Session[0]
        const error = status.$.Error
        const result = status.$.Result
        const message = status.$.Message

        if(result === '1' && error === '0') {
          this.totalAmount = parseInt(session.$.TotalAmount)
          //console.log(this.totalAmount)

          if(this.totalAmount >= this.amount) {
            // Как только собираем нужную сумму, отключаем купюроприемник
            this.isFinished = true
            await api.pc_validator_stop()
            
          } else {
            await this.timeout(1000)
          }
        } else {
          this.error(message)
        }
      }

    },
    async pay() {
      const days = this.$store.state.days
      const cellId = this.$store.state.cellId
      const phone = this.$store.state.phone
      //console.error(cellId, phone, days)
      const load = await api.cellLoad(cellId, phone, days)
      
      if(load.status == 200) {
        this.$router.push({ name: 'Print', params: { paymentType: 'cash' } }) 
      } else {
        this.error(load.message)
      }
    },
    error(msg) {
      console.error(msg)
      this.$router.push({ name: 'Error', params: { message: msg } }) 
    }
  },
}
</script>

<style scoped>
.pay-cash {
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