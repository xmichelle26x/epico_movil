import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { es, en } from '../i18n/supportedLanguages'

export { default as StartScreen } from './StartScreen'
export { default as LoginScreen } from './LoginScreen'
export { default as RegisterScreen } from './RegisterScreen'
export { default as ResetPasswordScreen } from './ResetPasswordScreen'
export { default as Dashboard } from './Dashboard'

i18n.fallbacks = true
i18n.translations = { es, en }
i18n.locale = Localization.locale

export default i18n;