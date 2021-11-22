import { createStore } from 'vuex'

export default createStore({
  state: {
    locale: 'en',
    cellId: '',
    cellName: '',
    days: 0,
    phone: '',
    price: 0,
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale
    },
    setCellId(state, cellId) {
      state.cellId = cellId
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
    },
    reset(state) {
      state.cellId = ''
      state.cellName = ''
      state.days = 0
      state.phone = ''
      state.price = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
