import type { Agent } from '../agent'
import { AGENT } from '../agent'
import type { Fn } from '../type'
const NAME = 'p'
const AGENT_NAME = AGENT[NAME]

export const Pfn: Fn = (agent: Agent, args: string[]) => {
  if (args.length === 0) {
    console.error('please input arg')
    process.exit(0)
  }
  const get_agent = AGENT_NAME[agent]

  if (!get_agent) {
    console.error(`current ${agent} wasn't supported`)
    process.exit(0)
  }
  return `${get_agent} ${args.join(' ')}`
}

