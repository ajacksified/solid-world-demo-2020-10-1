import { SessionProvider } from "@inrupt/solid-ui-react";
import '../styles/globals.css'

export const sessionId = "my-demo-app";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider sessionId={sessionId}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp
