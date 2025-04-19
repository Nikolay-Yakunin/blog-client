import { AppRouter } from '@app/Router'
import { CookieConsent } from '@shared/ui/CookieConsent/CookieConsent'
import { ButtonChangeLang } from '@shared/ui/ButtonChangeLang/ButtonChangeLang'
import { ButtonChangeTheme } from '@shared/ui/ButtonChangeTheme/ButtonChangeTheme'

function App() {
  return (
    <>
      <ButtonChangeTheme />
      <ButtonChangeLang />
      <AppRouter />
      <CookieConsent />
    </>
  )
}

export default App
