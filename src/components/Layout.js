import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { Global, css } from "@emotion/core";

import Header from "../components/Header";
import Footer from "../components/Footer";

import useSEO from "../hooks/useSEO";

const Layout = props => {
  //asigna a la constante el hook
  const SEO = useSEO();

  //desestructura desde el hook
  const {
    siteName,
    fallbackSeo: { description, title }
  } = SEO;

  return (
    <Fragment>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: "PT Sans", sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto", sans-serif;
          }
          h3 {
            font-family: "PT Sans", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      {/*Helmet se utiliza para ajustar todo el contenido anterior al body*/}
      <Helmet>
        <title>{siteName}</title>
        <meta name="description" content={description} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {props.children}
      <Footer title={title} />
    </Fragment>
  );
};

export default Layout;
