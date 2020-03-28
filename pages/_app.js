import "../styles/index.css";
import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Feature from "../components/feature";

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Strapi blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
      </Head>
      <Nav />
      <Hero />
      <Feature />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

// Wraps all components in the tree with the data provider
export default withData(App);
