import { expect, test } from 'vitest'
import { inspect } from '../src/inspect'
import { Afn, Ufn, run } from '../src/index'
test('inspect', async () => {
  const cwdA = `${process.cwd()}/feature/a`
  const resultA = await inspect({ cwd: cwdA })
  expect(resultA).toBe('pnpm')
  const cwdB = `${process.cwd()}/feature/b`
  const resultB = await inspect({ cwd: cwdB })
  expect(resultB).toBe(null)
  const cwd = `${process.cwd()}`.slice(0, -5)
  const result = await inspect({ cwd })
  expect(result).toBe('pnpm')
})

test('test a command', async () => {
  process.env.NODEDEV = 'debug'
  const resultA = await run(Afn, [], `${process.cwd()}/feature/a`)
  expect(resultA).toBe('pnpm install')
})

test('test Afn', async () => {
  const val = Afn('yarn', ['install', '-g'])
  expect(val, 'yarn add install -g')
})

test('test Ufn', async () => {
  const val = Ufn('yarn', ['dev'])
  expect(val, 'yarn run dev')
})
