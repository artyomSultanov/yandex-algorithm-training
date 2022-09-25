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
  console.log(
    solve(Number(lines[0]), lines[1].split(' ').map(Number), Number(lines[2]))
  )
})

function solve(n, arr, x) {
  let x0 = arr[0]
  for (let i = 1; i < n; i++) {
    if (Math.abs(x - x0) > Math.abs(x - arr[i])) x0 = arr[i]
  }
  return x0
}

// console.log(solve(6, [1, 4, 6, 8, 22, 11], 9))
