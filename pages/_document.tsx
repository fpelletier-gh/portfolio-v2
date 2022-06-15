import { Html, Head, Main, NextScript } from "next/document";
import theme from "../chakra/theme";
import { ColorModeScript } from "@chakra-ui/react";
import Favicon from "../components/favicon";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto+Flex&display=optional"
        />
        <Favicon />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
