import React from 'react'
import Layout from '../components/layout'
import {Container, Row, Col} from "react-bootstrap"

const NotFoundPage = ({location, data}) => {
	//const pages = data.allSitePage.nodes.map(({path}) => path)

	return (
		<Layout>
			<Container className="not-found-container">
				<Row className="py-3">
					<Col className="col-12">
						<h2>Pàgina no trobada</h2>
					</Col>
				</Row>
			</Container>
		</Layout >
	)
}

export default NotFoundPage

export const query = graphql`
	query NotFoundPageQuery {
		allSitePage(filter: {path: {nin: ["/dev-404-page", "/404", "/404.html"]}}) {
			nodes {
				path
			}
		}
	}
`
