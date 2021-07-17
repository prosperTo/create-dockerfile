const start =  async () => {

  // Core
  const core = require('@actions/core')
  const fs = require('fs')

  const path = require("path")
  const fullPath = path.join(process.env.GITHUB_WORKSPACE, 'Dockerfile')

  await fs.writeFile(fullPath, core.getInput('params').replace(/;/g, '\n'), 'utf-8', (error) => {
    if (error) core.setFailed(error.message)
    console.log(`Successfully written file ${fullPath} `)
    core.setOutput("full-path", fullPath)
  })
}

start()