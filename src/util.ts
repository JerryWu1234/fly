import { execSync } from 'child_process'
import os from 'os'
import { resolve } from 'path'
import { readFileSync, statSync } from 'fs'

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

export function getPackageJson(cwd: string) {
  let path = resolve(cwd, 'package.json')
  if (statSync(cwd).isFile())
    path = resolve(cwd, '../package.json')

  return JSON.parse(readFileSync(path, 'utf-8') || '{}')
}
