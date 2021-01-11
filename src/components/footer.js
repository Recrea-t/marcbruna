import React from 'react'
import {Container} from "react-bootstrap"

const StickyFooter = ({title, author}) => {
	return (
		<footer className="footer bg-secondary">
			<Container fluid>
				<div className="credits text-center text-white">
					<span className="copyright">&copy; 2020 {title} | DISSENY: {author.name}</span>
				</div>
			</Container>
		</footer>
	)
}

export default StickyFooter
