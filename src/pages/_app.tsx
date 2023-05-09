import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "chakra/theme";
import Layout from "components/Layout/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
