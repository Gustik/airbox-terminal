import axios from "axios"

const backendUrl = 'http://localhost:20080/v1'
const pc_url = 'http://localhost:8888/devices'
const parseString = require('xml2js').parseString;

async function pc_request(method) {
  const { data }  = await axios.get(pc_url + "?method=" + method)
  var json
  parseString(data, function (err, result) {
    json = result
  })
  return json.Response
}

async function pc_session_open() {
  return pc_request('session_open')
}

async function pc_session_close() {
  return pc_request('session_close')
}

// Получить полный статус
async function pc_get_status() {
  return pc_request('get_status')
}

// Получить статус купюроприемника
async function pc_get_status_validator() {
  return pc_request('get_status_validator')
}

// Включить купюроприемник
async function pc_validator_start() {
  return pc_request('validator_start')
}

// Выключить купюроприемник
async function pc_validator_stop() {
  return pc_request('validator_stop')
}

async function cellList() {
  const { data }  = await axios.get(backendUrl + "/cell/list")
  return data
}

async function cellLoad(cellId, phone, days) {
  const { data }  = await axios.get(`${backendUrl}/cell/load?cellId=${cellId}&days=${days}&phone=${phone}`)
  return data
}

export default {
  pc_session_open,
  pc_session_close,
  pc_get_status,
  pc_get_status_validator,
  pc_validator_start,
  pc_validator_stop,
  cellList,
  cellLoad,
}