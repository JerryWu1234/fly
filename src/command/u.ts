import type { Agent } from '../agent'
import { AGENT } from '../agent'
import type { Fn } from '../type'
const NAME = 'u'
const AGENT_NAME = AGENT[NAME]

export const Ufn: Fn = (agent: Agent, args: string[]) => {
  if (args.length === 0) {
    console.error('please input command')
    process.exit(1)
  }

  const get_agent = AGENT_NAME[agent]
  return `${get_agent} ${args.join(' ')}`
}

