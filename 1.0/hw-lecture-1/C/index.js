// Телефонные номера
// https://contest.yandex.ru/contest/27393/problems/C/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const lines = []

rl.on('line', (line) => {
  let phoneNumber = line.match(/\d/g).join('')
  if (phoneNumber.length === 7) phoneNumber = '8495' + phoneNumber
  lines.push(phoneNumber.slice(1))
})

rl.once('close', () => {
  addPhoneNumber(lines)
})

function addPhoneNumber(lines) {
  const newNumber = lines[0]

  for (let i = 1; i < lines.length; i++) {
    if (newNumber === lines[i]) console.log('YES')
    else console.log('NO')
  }
}
