import type { Agent } from '../agent'
import { AGENT, INIT } from '../agent'
import type { Fn } from '../type'
const NAME = 'a'
const AGENT_NAME = AGENT[NAME]

export const Afn: Fn = (agent: Agent, args: string[]) => {
  if (args.length === 0)
    return INIT[agent]

  const get_agent = AGENT_NAME.install[agent]
  return `${get_agent} ${args.join(' ')}`
}

