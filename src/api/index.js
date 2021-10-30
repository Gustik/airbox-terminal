import axios from "axios"

const backendUrl = 'http://localhost:20080/v1'
const pc_url = 'http://localhost:8888/devices'

async function pc_session_open() {
  const { data }  = await axios.get(pc_url + "?method=session_open")
  return data
}

async function pc_session_close() {
  const { data }  = await axios.get(pc_url + "?method=session_close")
  return data
}

// Получить полный статус
async function pc_get_status() {
  const { data }  = await axios.get(pc_url + "?method=get_status")
  return data
}

// Получить статус купюроприемника
async function pc_get_status_validator() {
  const { data }  = await axios.get(pc_url + "?method=get_status_validator")
  return data
}

// Включить купюроприемник
async function pc_validator_start() {
  const { data }  = await axios.get(pc_url + "?method=validator_start")
  return data
}

// Выключить купюроприемник
async function pc_validator_stop() {
  const { data }  = await axios.get(pc_url + "?method=validator_stop")
  return data
}

async function cellList() {
  const { data }  = await axios.get(backendUrl + "/cell/list")
  return data
}

export default {
  pc_session_open,
  pc_session_close,
  pc_get_status,
  pc_get_status_validator,
  pc_validator_start,
  pc_validator_stop,
  cellList
}