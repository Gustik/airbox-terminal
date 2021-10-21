import axios from "axios"

const backendUrl = 'http://localhost:20080/v1'
const pc_url = 'http://localhost:8888/devices'

async function pc_session_open() {
  const data  = await axios.get(pc_url + "?method=session_open")
  // парсинг данных и их возвращение в виде правильно сформированного объекта Invoice
  return data
}

async function cellList() {
  const { data }  = await axios.get(backendUrl + "/cell/list")
  return data
}

export default {
  pc_session_open,
  cellList
}