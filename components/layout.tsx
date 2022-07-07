import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { Grid, Container, GridItem } from "@chakra-ui/react";

export const siteTitle = "Francis Pelletier Portfolio";

export default function Layout({ children, scrollHandler, pageInView }) {
  return (
    <Container variant="siteContainer" pt="4rem" pb="0">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Francis Portfolio" content="Francis Pelletier portfolio" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header scrollHandler={scrollHandler} pageInView={pageInView} />
      <Grid display="grid" templateColumns="repeat(4, 1fr)" w="100%" mx="auto">
        <GridItem
          as="main"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          w="100%"
          colSpan={4}
        >
          {children}
          <Footer />
        </GridItem>
      </Grid>
    </Container>
  );
}
