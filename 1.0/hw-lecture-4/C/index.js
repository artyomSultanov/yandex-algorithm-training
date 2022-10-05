// Самое частое слово
// https://contest.yandex.ru/contest/27665/problems/C/
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
  console.log(
    solve(
      lines
        .flatMap((line) => line.split(' '))
        .filter((v) => v !== '' && !/ |\n/.test(v))
    )
  )
})

function solve(arr) {
  const words = new Map()
  let max = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (words.has(arr[i])) words.set(arr[i], words.get(arr[i]) + 1)
    else words.set(arr[i], 0)
    if (words.get(arr[i]) > max) max = words.get(arr[i])
  }
  const freqWords = []
  for (const [k, v] of words) {
    if (v === max) freqWords.push(k)
  }
  return freqWords.sort()[0]
}
