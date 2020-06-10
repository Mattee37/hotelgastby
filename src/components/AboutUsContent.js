import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Contenido = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  p {
    line-height: 2;
    margin-top: 2rem;
  }
`;

const AboutUsContent = () => {
  //consulta al ContentManager mediante GraphQl, no trae toda la informacion de "nosotros"
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `);

  //desestructura desde la respuesta
  const { titulo, contenido, imagen } = info.allDatoCmsPagina.nodes[0];

  return (
    <Fragment>
      <h2
        css={css`
          margin-top: 2rem;
          text-align: center;
          font-size: 4rem;
        `}
      >
        {titulo}
      </h2>
      <Contenido
        css={css`
          margin-bottom: 2rem;
        `}
      >
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} alt="imagen" />
      </Contenido>
    </Fragment>
  );
};

export default AboutUsContent;
