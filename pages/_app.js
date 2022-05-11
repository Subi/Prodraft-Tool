import '../styles/globals.css'
import DraftProvider, {DraftContext} from "../context/state";
function MyApp({ Component, pageProps }) {

  return (
      <DraftProvider>
        <Component {...pageProps} />
      </DraftProvider>
  )
}

export default MyApp
