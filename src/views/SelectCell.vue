<template>
  <div class="select-cell">
    <h1>{{ $t("message.selectCell") }}</h1>
    <div v-if="loading">
      loading
    </div>
    <div v-else>
      <table cellspacing="15">
        <tr v-for="(row,i) in cells" :key="i">
          <td v-for="(cell,j) in row" :key="j" :class="cell.busy ? 'cell busyCell' : 'cell freeCell'">
            {{cell.id}}
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
        [{id:11, busy: true}, {id:12, busy: false}, {id:13, busy: false} ],
        [{id:21, busy: false}, {id:22, busy: false}, {id:23, busy: false} ],
        [{id:31, busy: false}, {id:32, busy: true}, {id:33, busy: false} ],
      ]
      this.loading = false
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