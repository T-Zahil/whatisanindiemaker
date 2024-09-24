import ara from './locales/ara.js'
import de from './locales/de.js'
import en from './locales/en.js'
import fr from './locales/fr.js'
import hu from './locales/hu.js'
import it from './locales/it.js'
import ptBr from './locales/pt-br.js'
import ru from './locales/ru.js'
import sp from './locales/sp.js'
import tr from './locales/tr.js'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    ara,
    de,
    en,
    fr,
    hu,
    it,
    ptBr,
    ru,
    sp,
    tr
  }
}))
