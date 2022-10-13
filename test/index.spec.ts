import { expect, test } from 'vitest'
import { inspect } from '../src/inspect'
import { Afn, Ufn, run } from '../src/index'
import { getPackageJson } from '../src/util'
import { recordCommand } from '../src/command/u'
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

test('test read package.json', async () => {
  const cwdA = `${process.cwd()}/feature/a`
  const jsonA = getPackageJson(cwdA)
  expect(jsonA).toMatchSnapshot()
  const cwdB = `${process.cwd()}/feature/a/pnpm-lock.yaml`
  const jsonB = getPackageJson(cwdB)
  expect(jsonB).toMatchSnapshot()
})

test('test merge object', () => {
  const cwdA = `${process.cwd()}/feature/a`
  const v = recordCommand('pnpm', ['dev', '--port:300'], cwdA, {})
  expect(v).toMatchSnapshot()
  const b = recordCommand('pnpm', ['dev', '--port:300'], cwdA, {
    feature: 'pnpm run dev --port:300',
    aa: 'pnpm run dev',
  })
  expect(b).toMatchSnapshot()
  const c = recordCommand('pnpm', ['dev', '--port:300'], cwdA, {
    aa: 'pnpm run dev',
  })
  expect(c).toMatchSnapshot()
})
