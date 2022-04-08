import axios from 'axios'

const fs = require('fs-extra')

async function getContributors () {
  return await axios.get(
    'https://api.github.com/repos/t-zahil/whatisanindiemaker/contributors',
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    },
  )
}

module.exports = function beforeBuild () {
  this.nuxt.hook('build:before', async () => {
    fs.emptyDir('static/data')

    const contributors = await getContributors()
    const path = 'static/data/contributors.json'

    try {
      fs.ensureFileSync(path)
      fs.writeJson(path, contributors.data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`${path} Write Failed. ${e}`)
    }
  })
}
