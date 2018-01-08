const os = require('os')
const fs = require('fs')
const path = require('path')

function getAuthTokenFromNpmrc () {
  const npmrcPath = path.join(os.homedir(), '.npmrc')
  if (!fs.existsSync(npmrcPath)) return null
  const lines = fs.readFileSync(npmrcPath, 'utf8')
    .split('\n')
    .map(line => line.trim())

  const authLine = lines.find(line => line.includes('authToken='))
  
  if (!authLine) return null

  return authLine.split('authToken=')[1]
}

module.exports = getAuthTokenFromNpmrc