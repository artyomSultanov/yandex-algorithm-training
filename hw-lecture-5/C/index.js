// Туризм
// https://contest.yandex.ru/contest/27794/problems/C/
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const lines = []
rl.on('line', (line) => {
  lines.push(line.split(' ').map(Number))
})

rl.once('close', () => {
  const n = lines[0][0]
  const peaks = lines.slice(1, n + 1)
  const m = lines[n + 1][0]
  const trails = lines.slice(n + 2)
  console.log(solve(n, peaks, m, trails))
})

function solve(n, peaks, m, trails) {
  const climbs = [peaks[0][1]]
  const descents = [0]

  for (let i = 1; i < n; i++) {
    if (peaks[i - 1][1] < peaks[i][1]) {
      climbs[i] = climbs[i - 1] + peaks[i][1] - peaks[i - 1][1]
      descents[i] = descents[i - 1]
    } else {
      descents[i] = descents[i - 1] + peaks[i - 1][1] - peaks[i][1]
      climbs[i] = climbs[i - 1]
    }
  }
  const result = []
  for (let i = 0; i < m; i++) {
    const [start, end] = trails[i]
    if (start < end) {
      result.push(climbs[end - 1] - climbs[start - 1])
    } else {
      result.push(descents[start - 1] - descents[end - 1])
    }
  }
  return result.join('\n')
}
