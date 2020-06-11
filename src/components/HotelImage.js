import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";

const Image = styled(BackgroundImage)`
  height: 700px;

  @media (max-width: 766px) {
    height: 500px;
  }
`;

const ImageText = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.8),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0%;

    @media (max-width: 766px) {
      font-size: 2.6rem;
    }
  }

  p {
    font-size: 2rem;

    @media (max-width: 766px) {
      font-size: 2rem;
    }
  }
`;

const HotelImage = () => {
  //hace la consulta al ContentManager mediante GraphQl, nos devuelve una imagen
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "1.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Image tag="section" fluid={image.sharp.fluid} faidId="soft">
      <ImageText>
        <h1>Bienvenido al Hotel Gatsby!</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </ImageText>
    </Image>
  );
};

export default HotelImage;
