import React from "react"
import {Container} from "react-bootstrap"

import Img from "gatsby-image/withIEPolyfill"

const Testimonial = (props) => {
	const {text} = props.testimonial

	return (
		<div className="client card">
			<div className="card-body position-relative">
				<div className="profile position-absolute top-0 start-0 translate-middle-y rounded-circle bg-danger p-2"></div>
				<div className="card-subtitle mt-4">
					<p><small className="text-muted">{text}</small></p>
				</div>
			</div>
		</div>
	)
}

const Testimonials = ({testimonials}) => {
	return (
		<Container>
			< div className="d-flex flex-row flex-nowrap justify-content-md-between" >
				{testimonials.map((item, index) => <Testimonial key={index} index={index} testimonial={item} />)}
			</div >
			<div className="d-flex flex-nowrap justify-content-md-between py-5">
				{testimonials.map((item, index) => <Img key={index} className="client-logo" fluid={item.logo.childImageSharp.fluid} alt={item.name} objectFit="contain" />)}
			</div>
		</Container >
	)
}

export default Testimonials

