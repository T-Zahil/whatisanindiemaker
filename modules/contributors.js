import { defineNuxtModule } from '@nuxt/kit'

const fs = require('fs-extra')

async function getContributors() {
  return await fetch(
    'https://api.github.com/repos/t-zahil/whatisanindiemaker/contributors',
    {
      headers: {
        Authorization: `token ${process.env.githubToken}`,
      },
    },
  )
}

export default defineNuxtModule((options, nuxt) => {
  nuxt.hook('build:before', async () => {
    if (process.env.githubToken) {
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
    }
  })
})
