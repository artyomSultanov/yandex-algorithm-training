// Система линейных уравнений
// https://contest.yandex.ru/contest/27393/problems/J/
// Нужно дорешать

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let lines = []
rl.on('line', (line) => {
  lines.push(line)
})

rl.once('close', () => {
  console.log(...solve(...lines.map(Number)).map(toFixed5))
})

function toFixed5(n) {
  return +n.toFixed(5).replace(/0+$/g, '')
}

function getFinite(arr) {
  return arr.filter(Number.isFinite)
}

function solve(a, b, c, d, e, f) {
  if (a !== 0) {
    const k = c / a
    c = 0
    d -= b * k
    f -= e * k
    if (c === 0 && d === 0 && a !== 0 && b !== 0 && e !== 0) {
      return [1, -a / b, e / b]
    }
  }
  if (b !== 0) {
    const k = d / b
    b = 0
    a -= c * k
    e -= f * k
  }
  if (a === 0 && b === 0 && c !== 0 && d !== 0 && f !== 0) {
    return [1, -c / d, f / d]
  }
  if (a !== 0 && b === 0 && c === 0 && d !== 0) {
    return [2, e / a, f / d]
  }
  if (b === 0 && d === 0 && (a !== 0 || c !== 0)) {
    return [3, ...getFinite([e / a, f / c])]
  }
  if (a === 0 && c === 0 && (b !== 0 || d !== 0)) {
    return [4, ...getFinite([e / b, f / d])]
  }
  if (a === 0 && b === 0 && c === 0 && d === 0) {
    return [5]
  }
}

// console.log(solve(1, 0, 0, 1, 3, 3))
// console.log(solve(1, 1, 2, 2, 1, 2))
// console.log(solve(0, 0, 1, 2, 1, 2))
// console.log(solve(0, 2, 0, 4, 1, 2))
// console.log(solve(0, 0, 0, 0, 1, 2))
// console.log(solve(0, 0, 0, 1, 1, 1))
// console.log(solve(1, 0, 2, 0, 1, 1))
