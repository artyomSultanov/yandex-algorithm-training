// Словарь синонимов
// https://contest.yandex.ru/contest/27665/problems/A/
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const lines = []
rl.on('line', (line) => {
  lines.push(line)
})

rl.once('close', () => {
  console.log(solve(lines.slice(1).map((s) => s.split(' '))))
})

function solve(arr) {
  const words = new Map()
  for (const wx of arr) {
    if (wx.length === 1) return words.get(wx[0])
    words.set(wx[0], wx[1])
    words.set(wx[1], wx[0])
  }
}
