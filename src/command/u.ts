import type { Agent } from '../agent'
import { AGENT } from '../agent'
import type { Fn } from '../type'
import { getPackageJson } from '../util'
import { getStorage, setStorage } from '../storage'
const NAME = 'u'
const AGENT_NAME = AGENT[NAME]

export const Ufn: Fn = (agent: Agent, args: string[], cwd?: string) => {
  if (args.length === 0) {
    console.error('please input command')
    process.exit(1)
  }
  return getExecuteCmd(agent, args)
}

export function recordCommand(agent: Agent, args: string[], cwd: string, mergeObject: Record<string, any>) {
  const json = getPackageJson(cwd)
  // const res = getStorage()
  let returnVal: Record<string, any> = {}
  if (mergeObject[json.name]) {
    return mergeObject
  }
  else {
    returnVal[json.name] = getExecuteCmd(agent, args)
    if (Object.keys(mergeObject))
      returnVal = Object.assign(mergeObject, returnVal)
    return returnVal
  }
}

function getExecuteCmd(agent: Agent, args: string[]) {
  const get_agent = AGENT_NAME[agent]
  return `${get_agent} ${args.join(' ')}`
}
