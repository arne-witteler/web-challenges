import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("Fehler beim fetchen!");
    throw error;
  }
  return res.json();
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher, refreshInterval: 5000 }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
