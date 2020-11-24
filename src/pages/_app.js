import Amplify from "aws-amplify";
import config from "../../src/aws-exports";
import "../styles/globals.css";
import { Header } from "../components";

Amplify.configure({ ...config, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <Header /> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
