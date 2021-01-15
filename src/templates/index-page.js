import "@fontsource/montserrat"
import "@fontsource/montserrat/900.css"

import React from "react"
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'
import {Container} from "react-bootstrap"
import useWindowSize from "../utils/useWindowSize";

import Layout from "../components/layout"
import Header from "../components/header"
import Heading from "../components/heading"
import Products from "../components/products"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"

export const IndexPageTemplate = ({frontmatter}) => {
	return (
		<React.Fragment>
			<Container>
				<Heading heading="Serveis" id="serveis" />
				<Products />
			</Container>

			<Container>
				<Heading heading="Clients" id="clients" />
			</Container>

			<Container fluid className="scrollable bg-primary">
				<Testimonials testimonials={frontmatter.testimonials} />
			</Container>

			<Container>
				<Heading heading="Contacte" id="contacte" />
			</Container>

			<Container>
				<Contact />
			</Container>
		</React.Fragment>
	)
}

IndexPageTemplate.propTypes = {}

const IndexPage = ({data}) => {
	useWindowSize()

	const {frontmatter} = data.markdownRemark

	return (
		<Layout title={frontmatter.title} description={frontmatter.description}>
			<Header description={frontmatter.description} image={frontmatter.image} />
			<IndexPageTemplate frontmatter={frontmatter} />
		</Layout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default IndexPage

export const query = graphql`
  query IndexPageTemplateQuery {
		markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
			frontmatter {
				title
        description
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
				testimonials {
					name
					text
					url
					logo {
						childImageSharp {
							fluid (maxWidth: 400){
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
    }
  }
`
