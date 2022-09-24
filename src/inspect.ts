import path from 'path'
import { findUp } from 'find-up'
import type { Agent } from './agent'
import { LOCKS } from './agent'
import type { InspectOpt } from './type'

export async function inspect({ cwd }: InspectOpt) {
  let agent: Agent | null = null
  const lockPath = await findUp(Object.keys(LOCKS), { cwd })
  if (lockPath)
    agent = LOCKS[path.basename(lockPath)]

  return agent
}
