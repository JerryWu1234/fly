import { execSync } from 'child_process'
import os from 'os'

export function detectRepeatCmd(agent: string) {
  try {
    execSync(os.platform() === 'win32'
      ? `cmd /c "(help ${agent} > nul || exit 0) && where ${agent} > nul 2> nul"`
      : `command -v ${agent}`)
    return true
  }
  catch (e) {
    return false
  }
}
