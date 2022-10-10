import { expect, test } from 'vitest'
import { inspect } from '../src/inspect'
import { Afn, run } from '../src/index'
test('inspect', async () => {
  const cwd = `${process.cwd()}`.slice(0, -5)
  const result = await inspect({ cwd })
  expect(result).toBe('pnpm')
})

test('test a command', async () => {
  const result = await run(Afn, [], `${process.cwd()}/feature`)
  console.log(result)
})
