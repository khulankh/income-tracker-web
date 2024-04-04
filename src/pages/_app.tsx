import "@/styles/globals.css";
import "@/styles/setup.css";
import "@/styles/dashboard.css";
import "@/styles/records.css";
import "@/styles/sidebar.css"

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
