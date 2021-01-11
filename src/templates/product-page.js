import "@fontsource/montserrat"
import "@fontsource/montserrat/900.css"

import React from "react"
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import Finstral from "../components/finstral"
import Servei from "../components/servei"

export const ProductPageTemplate = ({frontmatter}) => {

	return (
		<React.Fragment>
			{frontmatter.finstral && <Finstral item={frontmatter.finstral} />}
			{frontmatter.products.map((item, index) => <Servei key={index} servei={item} />)}
		</React.Fragment>
	)
}

ProductPageTemplate.propTypes = {}

const ProductPage = ({data}) => {
	const {frontmatter} = data.markdownRemark

	return (
		<Layout title={frontmatter.title} description={frontmatter.description}>
			<ProductPageTemplate frontmatter={frontmatter} />
		</Layout>
	)
}

ProductPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default ProductPage

export const query = graphql`
	query ProductPageTemplateQuery($id: String) {
		markdownRemark(id: {eq: $id}) {
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
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					text
					image {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				products {
					name
					text
					images {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
    }
  }
`