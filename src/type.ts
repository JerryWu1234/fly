import type { Agent } from './agent'

export interface InspectOpt {
  cwd: string
}

export type Fn = (agent: Agent, args: string[]) => Promise<any> | string | undefined
