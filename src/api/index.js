import axios from "axios"

const backendUrl = 'http://192.168.88.80:20080/v1'
const pc_url = 'http://localhost:8888/devices'
//const pc_url = 'http://192.168.88.80:8888/devices'
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

/*async function pc_get_status_validator() {
  const { data }  = await axios.get(backendUrl + "/test/validator-status")
  var json
  parseString(data, function (err, result) {
    json = result
  })
  return json.Response
}*/

// Включить купюроприемник
async function pc_validator_start() {
  return pc_request('validator_start')
}

// Выключить купюроприемник
async function pc_validator_stop() {
  return pc_request('validator_stop')
}

// Включить сканер
async function pc_scaner_on() {
  return pc_request('scaner_on')
}

// Метод получения статуса сканера и полседнего считанного в сессии кода
async function pc_get_status_scaner() {
  return pc_request('get_status_scaner')
}

// Выключить сканер
async function pc_scaner_off() {
  return pc_request('scaner_off')
}

// Печать чека
async function pc_printer_print(paymentType, cellName, price, days, phone) {
  /*
  для фискальных позиций указывается "type": "position". 
  Чек будет открыт после первой позиции. Последующие нефискальные строки ("type": "text")
	будут напечатаны после закрытия чека
    поле price - цена за единицу товара\услуги в копейках
	  поле quantity - кол-во единиц товара
	  поле paymentObject для позиции чека может принимать значения service(Услуга) или commodity(Товар)
	
	для закрытия чека используется поле payments.
	Может содержать данные о платежах 
	"type": "electronically" - платеж картой
	"type": "cash" - платеж наличными
	Могут быть использованы как оба способа, так и только один. Главное условие - должна совпадать сумма платежей с суммой строк табличной части
	"sum": "1800" - сумма платежа в копейках

  data = {
    "type": "sell", 
    "items": [
      {"type": "text", "text": " СТРОКА ДЛЯ ПЕЧАТИ ДО ФИСКАЛЬНОЙ ЧАСТИ"},
      {"type": "position", "name": "Наименование товара1", "price": "1000", "quantity": "1", "paymentObject": "service/commodity"},		
      {"type": "position", "name": "Наименование товара2", "price": "100", "quantity": "10", "paymentObject": "service/commodity"},								
      {"type": "text", "text": " СТРОКА ДЛЯ ПЕЧАТИ ПОСЛЕ ФИСКАЛЬНОЙ ЧАСТИ"}
    ], 
    "payments": [
      {
        "type": "electronically", 
        "sum": "200"
      },
      {
        "type": "cash", 
        "sum": "1800"
      }
    ]
  }
  */
  const sum = price * days
  const postData = {
    "type": "sell", 
    "items": [
      {"type": "text", "text": "============"},
      {"type": "position", "name": `Аренда ячейки № ${cellName}`, "price": `${price}`, "quantity": `${days}`, "paymentObject": "service"},		
      {"type": "text", "text": `Номер телфона: ${phone}`}
    ], 
    "payments": [
      {
        "type": `${paymentType}`, 
        "sum": `${sum}`
      },
    ]
  }
  console.log(postData)
  const { data } = await axios.post(pc_url + "?method=printer_print", postData)
  let json
  parseString(data, function (err, result) {
    json = result
  })
  return json.Response
}

// Список доступных ячеек
async function cellList() {
  const { data }  = await axios.get(backendUrl + "/cell/list")
  return data
}

// Загрузка багажа
async function cellLoad(cellId, phone, days) {
  const { data }  = await axios.get(`${backendUrl}/cell/load?cellId=${cellId}&days=${days}&phone=${phone}`)
  return data
}

async function cellReserve(cellId) {
  const { data }  = await axios.get(`${backendUrl}/cell/reserve?cellId=${cellId}`)
  return data
}

export default {
  pc_session_open,
  pc_session_close,
  pc_get_status,
  pc_get_status_validator,
  pc_validator_start,
  pc_validator_stop,
  pc_scaner_on,
  pc_scaner_off,
  pc_get_status_scaner,
  pc_printer_print,
  cellList,
  cellLoad,
  cellReserve
}