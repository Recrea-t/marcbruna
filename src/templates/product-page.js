import "@fontsource/montserrat";
import "@fontsource/montserrat/900.css";

import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import Finstral from "../components/finstral";
import Servei from "../components/servei";

const ProductPageTemplate = ({ frontmatter }) => {
  return (
    <React.Fragment>
      {frontmatter.finstral && <Finstral item={frontmatter.finstral} />}
      {frontmatter.products.map((item, index) => (
        <Servei key={index} servei={item} />
      ))}
    </React.Fragment>
  );
};

ProductPageTemplate.propTypes = {};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <ProductPageTemplate frontmatter={frontmatter} />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const query = graphql`
  query ProductPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        finstral {
          name
          catalog
          configurator {
            name
            url
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 350
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          text
          image {
            childImageSharp {
              gatsbyImageData(
                width: 650
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        products {
          name
          text
          thumbnails: images {
            id
            childImageSharp {
              gatsbyImageData(
                width: 200
                aspectRatio: 1
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                transformOptions: { fit: COVER, cropFocus: ENTROPY }
              )
            }
          }
          images {
            id
            childImageSharp {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
