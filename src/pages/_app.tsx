import "@/styles/globals.css";
import "@/styles/setup.css";
import "@/styles/dashboard.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
