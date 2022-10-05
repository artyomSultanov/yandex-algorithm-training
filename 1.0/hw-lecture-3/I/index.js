// Полиглоты
// https://contest.yandex.ru/contest/27663/problems/I/
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
  console.log(solve(lines))
})

function solve(arr) {
  const n = Number(arr[0])
  const languages = new Map()
  for (let i = 1; i < arr.length; i++) {
    if (!Number.isNaN(Number(arr[i]))) {
      arr.slice(i + 1, i + 1 + Number(arr[i])).forEach((l) => {
        if (languages.has(l)) languages.set(l, languages.get(l) + 1)
        else languages.set(l, 1)
      })
      i = i + Number(arr[i])
    }
  }
  const everyoneKnow = []
  for (const [l, v] of languages) {
    if (v === n) everyoneKnow.push(l)
  }
  return [
    everyoneKnow.length,
    ...everyoneKnow,
    languages.size,
    ...languages.keys(),
  ].join('\n')
}
