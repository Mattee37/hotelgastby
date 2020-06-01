import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Layout from "../components/Layout";
import HotelImage from "../components/HotelImage";
import IndexContent from "../components/IndexContent";
import Preview from "../components/Preview";

import useHabitaciones from "../hooks/useHabitaciones";

const Lista = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const Index = () => {
  //asigna a la constante el retorno del hook
  const habitaciones = useHabitaciones();

  return (
    <Layout>
      <HotelImage />
      <IndexContent />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras habitaciones
      </h2>

      <Lista>
        {habitaciones.map(habitacion => (
          <Preview key={habitacion.id} habitacion={habitacion} />
        ))}
      </Lista>
    </Layout>
  );
};

export default Index;
