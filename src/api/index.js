import axios from "axios"

pc_url = 'http://localhost:8888/devices'

async function pc_session_open() {
  const { data } = await axios.get(pc_url + "?method=session_open")
  // парсинг данных и их возвращение в виде правильно сформированного объекта Invoice
}

export default {
  pc_session_open,
}