import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'
import {ReduxProvider} from '../redux/provider'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
  <Component {...pageProps} />
  </ReduxProvider>
  )
  
}
