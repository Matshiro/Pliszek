import "@/styles/globals.css";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import LoginModal from "@/components/modals/LoginModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <LoginModal />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
