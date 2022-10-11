export type Agent = 'bun' | 'pnpm' | 'yarn' | 'npm'

export const LOCKS: Record<string, Agent> = {
  'yarn.lock': 'yarn',
  'pnpm-lock.yaml': 'pnpm',
  'package-lock.json': 'npm',
  'bun.lockb': 'bun',

}

export const INIT = {
  yarn: 'yarn',
  npm: 'npm install',
  pnpm: 'pnpm install',
  bun: 'bun install',
}

export const AGENT = {
  a: {
    yarn: 'yarn add',
    npm: 'npm install',
    pnpm: 'pnpm install',
    bun: 'bun install',
  },
  u: {
    yarn: 'yarn run',
    npm: 'npm run',
    pnpm: 'pnpm run',
    bun: 'bun run',
  },
  c: {},
}

