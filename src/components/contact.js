import React from "react"
import {Row, Col} from "react-bootstrap"
import '../utils/font-awesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import useSiteMetadata from './siteMetadata'

export const Contact = () => {
	const {
		address,
		phone,
		email,
	} = useSiteMetadata().organization

	return (
		<Row className="g-4">
			<Col className="col-12 col-md-4 text-center text-contacte">
				<p className="py-md-3">
					<FontAwesomeIcon icon="map-marker" /><br />
					<span dangerouslySetInnerHTML={{__html: address}}></span>
				</p>
				<p className="py-md-3">
					<a href={`tel:${phone.number}`}>
						<FontAwesomeIcon icon="phone" className="fa-flip-horizontal" /><br />{phone.title}
					</a>
				</p>
				<p className="py-md-3">
					<a href={`mailto:${email}`}>
						<FontAwesomeIcon icon="envelope" /><br />{email}
					</a>
				</p >
			</Col >
			<Col className="col-md-8">
				<div id="map-container-google" className="map-container w-100 h-100">
					<iframe
						title="Google Map - Marc Bruna Fuster"
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBMmbhjFy6S1eQe5oQWG8pYoZPLy3nHACs&language=ca&q=marc+bruna+fuster"
						style={{width: "100%", height: "100%", border: 0}}
						frameBorder="0"
						aria-hidden="false"
						tabIndex="0"
						allowFullScreen />
				</div>
			</Col>
		</Row >
	)
}

export default Contact
