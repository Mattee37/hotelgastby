//en esta seccion administramos la creacion de paginas dinamicamente
exports.createPages = async ({ actions, graphql, reporter }) => {
  //hace la consulta al ContentManager mediante GraphQl, nos devuelve la cantidad de paginas mediante el slug
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `);

  //si hay errores los muestra por medio del reporter
  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors);
  }

  //asigna a la constante la desestructuracion del query
  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

  //crea, por cada habitacion, una pagina estatica usando el componente Room.js y pasando como query a slug dentro del context y como path el slug
  habitaciones.forEach(habitacion => {
    actions.createPage({
      path: habitacion.slug,
      component: require.resolve("./src/components/Rooms.js"),
      context: {
        slug: habitacion.slug
      }
    });
  });
};
