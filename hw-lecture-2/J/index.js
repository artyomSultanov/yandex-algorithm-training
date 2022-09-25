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
  const n = Number(lines[0])
  const freqs = lines
    .slice(1)
    .map((line) => [Number(line.split(' ')[0]), line.split(' ')[1]])
  console.log(solve(n, freqs))
})

function solve(n, freqs) {}
