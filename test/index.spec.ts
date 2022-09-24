import { expect, it } from 'vitest'
import { inspect } from '../src/inspect'
it('inspect', async () => {
  const cwd = `${process.cwd()}/feature`
  const result = await inspect({ cwd })
  expect(result, 'pnpm')
})
