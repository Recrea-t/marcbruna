import React from "react"
import {Row, Col} from "react-bootstrap"
import Img from "gatsby-image"

const Gallery = class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: 0,
		}
	}

	render() {
		const {name, images} = this.props
		const imageExpanded = images[this.state.selected]

		const previewStyle = {
			objectFit: "contain",
			gridArea: "1 / 1 / 2 / 2",
			maxWidth: "100%",
		}

		const thumbnailStyle = {
			gridArea: "1 / 1 / 2 / 2",
			maxWidth: "100%",
			margin: "auto"
		}

		return (
			<Row className="row-cols-1 row-cols-sm-2 my-3 g-0" >
				<Col className="col-sm-8 preview">
					<Img
						objectFit="contain"
						imgStyle={previewStyle}
						fluid={imageExpanded.childImageSharp.fluid}
						alt={`Imatge ${name} ampliada`} />
				</Col>
				<Col className="col-sm-4 pt-3 py-sm-0 px-sm-3">
					<div className="gallery" >
						{
							images.map((item, index) =>
								<div key={index} role="button" tabIndex={0}
									className="shadow-sm"
									onClick={() => this.setState({selected: index})}
									onKeyDown={() => this.setState({selected: index})}>
									<Img
										imgStyle={thumbnailStyle}
										alt={`Thumbnail ${name}`}
										fluid={item.childImageSharp.fluid} />
								</div>
							)
						}
					</div >
				</Col >
			</Row >
		)
	}
}

export default Gallery

