import { execaCommand } from 'execa'
export async function runCli() {
  const args = process.argv.slice(2).filter(Boolean)
  try {
    await run()
  }
  catch (error) {
    process.exit(1)
  }
}

async function run() {
  const cwd = process.cwd()
  const common
  await execaCommand(common, { cwd })
}
