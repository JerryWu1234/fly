import type { Agent } from '../agent'
import { AGENT } from '../agent'
import type { Fn } from '../type'
import { getPackageJson } from '../util'
import { getStorage, setStorage } from '../storage'
const NAME = 'r'
const AGENT_NAME = AGENT[NAME]

export const Dfn: Fn = (agent: Agent, args: string[], cwd?: string) => {
  const storage = getStorage()
  const json = getPackageJson(cwd as string)
  if (args.length === 0 && !storage[json.name]) {
    console.error('please input command')
    process.exit(1)
  }
  else {
    const res = recordCommand(agent, args, cwd as string, storage)
    setStorage(res)
    return res[json.name]
  }

  return getExecuteCmd(agent, args)
}

export function recordCommand(agent: Agent, args: string[], cwd: string, mergeObject: Record<string, any>) {
  const json = getPackageJson(cwd)
  let returnVal: Record<string, any> = {}
  if (mergeObject[json.name] && args.length === 0) {
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
