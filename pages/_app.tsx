import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  let initial = true;
  return (
    <AnimatePresence mode="wait" initial={initial}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
