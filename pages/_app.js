import "../styles/globals.css";
import Web3Provider from "../src/components/Web3Provider";

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <Component {...pageProps} />
    </Web3Provider>
  );
}

export default MyApp;
