export type Agent = 'bun' | 'pnpm' | 'yarn' | 'npm'

export const LOCKS: Record<string, Agent> = {
  'bun.lockb': 'bun',
  'pnpm-lock.yaml': 'pnpm',
  'yarn.lock': 'yarn',
  'package-lock.json': 'npm',
  'npm-shrinkwrap.json': 'npm',
}

export const INIT = {
  npm: 'npm install',
  yarn: 'yarn',
  pnpm: 'pnpm install',
  bun: 'bun install',
}

export const AGENT = {
  a: {
    npm: 'npm',
    yarn: 'yarn',
    pnpm: 'pnpm',
    bun: 'bun',
  },
  b: {},
  c: {},
}

