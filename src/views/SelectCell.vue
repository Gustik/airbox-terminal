<template>
  <div class="select-cell">
    <h1>{{ $t("message.selectCell") }}</h1>
    <div v-if="loading">
      loading
    </div>
    <div v-else>
      <div class="cells-container">
        <div v-for="(cell, i) in cells" :key="i" :class="cell.busy ? 'cell busyCell' : 'cell freeCell'">
          
          <div v-if="cell.busy">{{cell.cellName}}</div>
          <router-link @click="saveData(cell)" v-else to="/select-days">
              {{cell.cellName}}
          </router-link>
        </div>
      </div>
    </div>
    <br>
    <router-link to="/" class="button">Назад</router-link>
  </div>
</template>
<script>
import api from '@/api'

export default {
  name: 'SelectCell',
  data() {
    return {
      cells: [],
      loading: true
    }
  },
  created() {
    this.fetchCells()
    //console.log(this.cells[0])
  },
  methods: {
    timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async fetchCells() {    
      const data = await api.cellList()
      
      this.cells = data.cells
      this.loading = false
    },
    saveData(cell) {
      this.$store.commit('setCell', cell.cellId)
      this.$store.commit('setCellName', cell.cellName)
      this.$store.commit('setPrice', cell.price)
    }
  },
}
</script>

<style scoped>
.select-cell {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 650px;
}

.cells-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 10px;
}
.cell a {
  color: white;
  text-decoration: none;
  font-size: 20px;
}

.busyCell {
  background: red;
}

.freeCell {
  background: green;
}

</style>