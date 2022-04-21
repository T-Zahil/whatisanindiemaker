# What is an Indie Maker?

😒 Are you tired of explaining to your relatives what an indie maker is?

💡 Next time, send them this website!

## Launch the development server

Install dependencies:
```bash
$ yarn
```

Set your [GitHub Personal Access Token](https://github.com/settings/tokens) as an environment variable:
```bash
$ export GITHUB_TOKEN=<your-token>
```

Run the server:
```bash
$ yarn dev
```


## Contributing

Contributions are always welcome!

### Adding a new language
- Clone the repo
- Create a new file `[YOUR_LANGUAGE].js` in the `locales` folder.
- In it, copy and paste the contents of the file the language from which you want to translate, for example `en.js`.
- Translate it 😄🙏
- Add your language key in `locales/index.js` and to the `i18n.locales` object in `nuxt.config.js`. It must be the exact same key you used to name your file `[YOUR_LANGUAGE].js`
- Submit a PR 🔥
