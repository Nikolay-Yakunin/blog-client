import { AppRouter } from '@app/Router'
import { CookieConsent } from '@shared/ui/CookieConsent/CookieConsent'

function App() {
  return (
    <>
      <AppRouter />
      <CookieConsent />
    </>
  )
}

export default App
