import Amplify from "aws-amplify";
import config from "../../src/aws-exports";
import { HeaderProvider } from "../contexts/HeaderContext";
import "../styles/globals.css";

Amplify.configure({ ...config, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <HeaderProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </HeaderProvider>
  );
}

export default MyApp;
