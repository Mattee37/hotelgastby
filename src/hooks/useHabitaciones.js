import { graphql, useStaticQuery } from "gatsby";

const useHabitaciones = () => {
  //hace la consulta al ContentManager mediante GraphQl, nos devuelve todas las habitaciones
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          id
          slug
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

  //retorna toda la informacion de cada habitacion por medio de un objeto
  return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
    titulo: habitacion.titulo,
    id: habitacion.id,
    contenido: habitacion.contenido,
    imagen: habitacion.imagen,
    slug: habitacion.slug
  }));
};

export default useHabitaciones;
