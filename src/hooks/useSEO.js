import { graphql, useStaticQuery } from "gatsby";

const useSEO = () => {
  //hace la consulta al ContentManager mediante GraphQl, nos devuelve todo el SEO
  const data = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `);

  return data.datoCmsSite.globalSeo;
};

export default useSEO;
