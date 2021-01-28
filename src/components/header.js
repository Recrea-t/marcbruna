import React from 'react'
import Img from "gatsby-image"
import {Container, Row, Col} from "react-bootstrap"

const Header = ({description, image}) => {
	return (
		<div className="page-header">
			<Img
				fluid={image.childImageSharp.fluid}
				alt={description}
				loading="eager"
				className="page-header-image" />
			<Container>
				<Row className="justify-content-start">
					<Col className="title-tagline">
						<h1 className="px-3">El teu fuster<span>al Pallars Sobirà</span></h1>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Header
