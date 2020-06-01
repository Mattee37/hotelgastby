import React, { Fragment } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import Nav from "../components/Nav";

const Enlace = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`;

const Footer = ({ title }) => {
  const year = new Date().getFullYear();
  return (
    <Fragment>
      <footer
        css={css`
          background-color: rgb(44, 62, 80);
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Nav />
          <Enlace to={"/"}>
            <h1>{title}</h1>
          </Enlace>
        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: #fff;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        Todos los derechos reservados {year} &copy;
      </p>
    </Fragment>
  );
};

export default Footer;