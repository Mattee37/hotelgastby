import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  p {
    line-height: 2;
  }
`;

const IndexContent = () => {
  //hace la consulta al ContentManager mediante GraphQl, nos devuelve "inicio"
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
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
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>
      <TextoInicio>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} alt="imagen" />
      </TextoInicio>
    </Fragment>
  );
};

export default IndexContent;
