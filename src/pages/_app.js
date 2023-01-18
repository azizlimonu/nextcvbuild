import { CVProvider } from '@/context/Store'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <CVProvider>
      <Component {...pageProps} />
    </CVProvider>
  )
}
