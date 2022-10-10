export type Agent = 'bun' | 'pnpm' | 'yarn' | 'npm'

export const LOCKS: Record<string, Agent> = {
  'bun.lockb': 'bun',
  'pnpm-lock.yaml': 'pnpm',
  'yarn.lock': 'yarn',
  'package-lock.json': 'npm',
}

export const INIT = {
  npm: 'npm install',
  yarn: 'yarn',
  pnpm: 'pnpm install',
  bun: 'bun install',
}

export const AGENT = {
  a: {
    install: {
      npm: 'npm install',
      yarn: 'yarn add',
      pnpm: 'pnpm install',
      bun: 'bun install',
    },
  },
  b: {},
  c: {},
}

