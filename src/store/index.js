import { createStore } from 'vuex'

export default createStore({
  state: {
    locale: 'en',
    cell: '',
    cellName: '',
    days: 0,
    phone: '',
    price: 0,
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale
    },
    setCell(state, cell) {
      state.cell = cell
    },
    setCellName(state, name) {
      state.cellName = name
    },
    setDays(state, days) {
      state.days = days
    },
    setPhone(state, phone) {
      state.phone = phone
    },
    setPrice(state, price) {
      state.price = price
    }
  },
  actions: {
  },
  modules: {
  }
})
