<template>
  <div class="home">
    <div v-if="init">
      Инициализация устройств
    </div>
    <div v-else>
      <router-link to="/select-cell" class="button main-button">{{$t("home.selectCell")}}</router-link> <br>
      <router-link to="/baggage-claim" class="button main-button">{{$t("home.getLuggage")}}</router-link>
    </div>
  </div>
</template>
<script>
import api from '@/api'

export default {
  name: 'Home',
  data() {
    return {
      init: true
    }
  },
  created() {
    this.$store.commit('reset')
    this.getStatus()
  },
  methods: {
    async getStatus() {    
      const status = await api.pc_get_status()
      
      if(status.Validator[0].$.Status == "0"
        //&& status.CoinValidator[0].$.Status == "0" 
        && status.Hopper[0].$.Status == "0" 
        && status.Dispenser[0].$.Status == "0") {
        this.init = false
      } else {
        let message = "Ошибка инициализации устройств."
        message += `vaildator: ${status.Validator[0].$.Status} `
        //message += `CoinValidator: ${status.CoinValidator[0].$.Status} `
        message += `Hopper: ${status.Hopper[0].$.Status} `
        message += `Dispenser: ${status.Dispenser[0].$.Status} `
        this.error(message)
      }
    },
    error(msg) {
      console.error(msg)
      this.$router.push({ name: 'Error', params: { message: msg } }) 
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.main-button {
  width: 400px;
  height: 150px;
  font-size: 40px;
  margin-bottom: 30px;
}

</style>