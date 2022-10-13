import { tmpdir } from 'os'
import { resolve } from 'path'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
type Storage = Record<string, any>

const storageDir = resolve(tmpdir(), '_fly')
const storagePath = resolve(storageDir, '_storage.json')

export function getStorage(): Storage {
  if (existsSync(storagePath)) {
    return JSON.parse(readFileSync(storagePath, 'utf-8') || '{}') || {}
  }
  else {
    setStorage({})
    return {}
  }
}
export function setStorage(storage: Storage) {
  if (!existsSync(storageDir))
    mkdirSync(storageDir, { recursive: true })
  writeFileSync(storagePath, JSON.stringify(storage), 'utf-8')
}
