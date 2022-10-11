import { execaCommand } from 'execa'
import inquirer from 'inquirer'
import type { Fn } from './type'
import { inspect } from './inspect'
import type { Agent } from './agent'
import { INIT } from './agent'
import { detectRepeatCmd } from './util'
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
  let agent = await inspect({ cwd })
  if (!agent) {
    const { version } = await inquirer.prompt([
      {
        type: 'list',
        name: 'version',
        message: 'please select install tool',
        default: 'npm',
        choices: Object.keys(INIT),
      },
    ])

    if (!detectRepeatCmd(version)) {
      const c = `npm install ${version} -g`
      await execute(c, cwd)
    }
    agent = version as Agent
  }
  const common = await fn(agent as Agent, args)
  await execute(common, cwd)
  return common
}

async function execute(command: string, cwd: string) {
  if (process.env.NODEDEV !== 'debug')
    await execaCommand(command, { stdio: 'inherit', encoding: 'utf-8', cwd })
}
