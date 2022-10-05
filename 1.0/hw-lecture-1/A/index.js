// Кондиционер
// https://contest.yandex.ru/contest/27393/problems/A/

const fs = require('fs')
const [t, mode] = fs.readFileSync('input.txt').toString().split('\n')
const [tRoom, tCond] = t.split(' ').map(Number)

function setTemperature(tRoom, tCond, mode) {
  switch (mode) {
    case 'freeze':
      return tRoom > tCond ? tCond : tRoom
    case 'heat':
      return tRoom < tCond ? tCond : tRoom
    case 'auto':
      return tCond
    case 'fan':
      return tRoom
  }
}

const result = setTemperature(tRoom, tCond, mode)
fs.writeFileSync('output.txt', result.toString())
