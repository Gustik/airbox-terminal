<template>
  <div class="pay-cash">
    <h1>Ячейка № {{ this.$store.state.cellName }}</h1>
    <h2>К оплате {{ amount }}</h2>
    
    <h3>Внесите наличные</h3>

    <h2>Принято {{ stackedAmount }}</h2>
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
    },
    stackedAmount() {
      var sum = 0
      this.stackedBanknotes.forEach(banknote => {
        sum += parseInt(banknote.Nominal)
      })
      return sum
    }
  },
  data() {
    return {
      isFinished: false,
      stackedBanknotes: []
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
      const session = await api.pc_session_open()
      const validattor = await api.pc_validator_start()
      console.log(session)
      console.log(validattor)
      
      while(!this.isFinished) {
        const status = await api.pc_get_status()
        // Если есть купюры в купюроприемнике
        if('StackedBanknotes' in status) {
          status.StackedBanknotes.forEach(banknote => {
            // Если этой банкноты у нас нет, то записываем
            if(this.stackedBanknotes.some(b => b.StackedTime !== banknote.StackedTime)){
              this.stackedBanknotes.push(banknote)
            }
          })
        }
        if(this.stackedAmount >= this.amount) {
          // Как только собираем нужную сумму, отключаем купюропримник
          this.isFinished = true
          await api.pc_validator_stop()
        } else {
          await this.timeout(1000)
        }
      }

    },
    pay() {
      
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