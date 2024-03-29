import "@fontsource/montserrat"
import "@fontsource/montserrat/900.css"

import React from "react"
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import {Container} from "react-bootstrap"

const GeneralPage = ({data}) => {
	const {frontmatter, html} = data.markdownRemark

	return (
		<Layout title={frontmatter.title} description={frontmatter.description}>
			<Container className="mt-3" dangerouslySetInnerHTML={{__html: html}}></Container>
		</Layout>
	)
}

GeneralPage.propTypes = {
	data: PropTypes.shape({
		html: PropTypes.object,
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default GeneralPage

export const query = graphql`
	query GeneralPageTemplateQuery($id: String) {
		markdownRemark(id: {eq: $id}) {
			id
			html
			frontmatter {
				title
        description
			}
    }
  }
`

