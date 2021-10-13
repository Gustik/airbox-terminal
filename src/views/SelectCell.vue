<template>
  <div class="select-cell">
    <h1>{{ $t("message.selectCell") }}</h1>
    <div v-if="loading">
      loading
    </div>
    <div v-else>
      <table cellspacing="15">
        <tr v-for="(row,i) in cells" :key="i">
            <td v-for="(cell,j) in row" :key="j" :class="cell.locked ? 'cell busyCell' : 'cell freeCell'">
                <div v-if="cell.locked">{{cell.id}}</div>
                <router-link @click="saveData(cell)" v-else to="/select-days">
                    {{cell.id}}
                </router-link>
            </td>
        </tr>
      </table>
    </div>
    <br>
    <router-link to="/" class="button">Назад</router-link>
  </div>
</template>
<script>

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
      await this.timeout(1000)
      this.cells = [
        [{id:11, locked: true, price: 100}, {id:12, locked: false, price: 100}, {id:13, locked: false, price: 100} ],
        [{id:21, locked: false, price: 100}, {id:22, locked: false, price: 100}, {id:23, locked: false, price: 100} ],
        [{id:31, locked: false, price: 100}, {id:32, locked: true, price: 100}, {id:33, locked: false, price: 100} ],
      ]
      this.loading = false
    },
    saveData(cell) {
      this.$store.commit('setCell', cell.id)
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
}
.cell {
  width: 50px;
  height: 50px;

}

.busyCell {
  background: red;
}

.freeCell {
  background: green;
}

</style>