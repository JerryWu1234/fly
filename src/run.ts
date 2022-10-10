import { execaCommand } from 'execa'
import type { Fn } from './type'
import { inspect } from './inspect'
import type { Agent } from './agent'
export async function runCli(fn: Fn) {
  const args = process.argv.slice(2).filter(Boolean)
  const cwd = process.cwd()
  try {
    await run(fn, args, cwd)
  }
  catch (error) {
    process.exit(1)
  }
}

export async function run(fn: Fn, args: string[], cwd: string) {
  const agent = await inspect({ cwd }) || '2323'
  const common = await fn(agent as Agent, args)
  await execute(common, cwd)
  return common
}

async function execute(command: string, cwd: string) {
  if (process.env.NODEDEV !== 'debug')
    await execaCommand(command, { stdio: 'inherit', encoding: 'utf-8', cwd })
}
