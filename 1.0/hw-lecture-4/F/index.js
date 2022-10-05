// Продажи
// https://contest.yandex.ru/contest/27665/problems/F/
// Ошибка ML
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
  let result = ''
  const shopLog = new Map()
  for (let i = 0; i < arr.length; i++) {
    const [person, product, count] = arr[i].split(' ')
    const products = shopLog.get(person)
    if (shopLog.has(person)) {
      if (products.has(product))
        products.set(product, Number(products.get(product)) + Number(count))
      else products.set(product, count)
    } else {
      shopLog.set(person, new Map([[product, count]]))
    }
  }
  const persons = Array.from(shopLog.keys()).sort()
  for (const person of persons) {
    result += `${person}:\n`
    const products = Array.from(shopLog.get(person).keys()).sort()
    for (const product of products) {
      result += `${product} ${shopLog.get(person).get(product)}\n`
    }
  }
  return result
}
