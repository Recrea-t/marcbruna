import "@fontsource/montserrat";
import "@fontsource/montserrat/900.css";

import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
//import useWindowSize from "../utils/useWindowSize";

import Layout from "../components/layout";
import Heading from "../components/heading";
import Contact from "../components/contact";

const IndexPageTemplate = ({ frontmatter }) => {
  return (
    <React.Fragment>
      <Container className="final">
        <Heading heading="Comunicat de tancament" />
        <p className="text-md">
          Per motius personals em veig obligat a aturar l’activitat i tancar la
          fusteria.
        </p>
        <p className="text-md">
          Fa nou anys que vaig iniciar aquesta aventura, amb molta il·lusió i
          amb uns objectius molt clars. A dia d’avui, no tinc ja ni aquella
          il·lusió del principi, ni la motivació suficient per seguir. Les
          darreres setmanes m’he trobat amb una sèrie d’entrebancs que no m’han
          deixat altra opció.
        </p>
        <p className="text-md">
          No ha estat una decisió fàcil, ben al contrari, és dur i dolorós
          decidir destruir allò que m’ha costat anys de tirar endavant. A pesar
          del moment difícil en que em trobo, però, m’enduc una gran experiència
          personal i professional.
        </p>
        <p className="text-md">
          Només em queda agrair la confiança dipositada en mi tot aquest temps
        </p>
      </Container>

      <Container>
        <Heading heading="Contacte" id="contacte" />
      </Container>

      <Container>
        <Contact />
      </Container>
    </React.Fragment>
  );
};

IndexPageTemplate.propTypes = {};

const IndexPage = ({ data }) => {
  //useWindowSize()

  const { frontmatter } = data.markdownRemark;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <IndexPageTemplate frontmatter={frontmatter} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const query = graphql`
  query IndexPageTemplateQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
