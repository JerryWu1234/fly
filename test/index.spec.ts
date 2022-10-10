import { expect, test } from 'vitest'
import { inspect } from '../src/inspect'
import { Afn, run } from '../src/index'
test('inspect', async () => {
  const cwdA = `${process.cwd()}/feature/a`
  const resultA = await inspect({ cwd: cwdA })
  expect(resultA, 'pnpm')
  const cwdB = `${process.cwd()}/feature/b`
  const resultB = await inspect({ cwd: cwdB })
  console.log(resultB)
})

test('test a command', async () => {
  process.env.NODEDEV = 'debug'
  const resultA = await run(Afn, [], `${process.cwd()}/feature/a`)
  expect(resultA, 'pnpm install')
})
