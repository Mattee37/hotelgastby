import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import Nav from "../components/Nav";

const Enlace = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`;

const Header = () => {
  return (
    <header
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
        <Enlace to={"/"}>
          <h1>Hotel Gatsby</h1>
        </Enlace>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
