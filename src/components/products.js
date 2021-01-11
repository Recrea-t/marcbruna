import React from "react"
import {Link} from "gatsby"
import useSiteMetadata from './siteMetadata'
import {useStaticQuery, graphql} from "gatsby"

const Product = (props) => {
	const {name, link} = props.product

	const imageNode = props.images[props.index].node

	return (
		<div className="servei">
			<img src={imageNode.publicURL} alt={name} />
			<div className="d-flex flex-column">
				<Link to={link} className="w-100 btn btn-primary mt-auto">{name}</Link>
			</div>
		</div>
	)
}

const Products = () => {
	const {
		menuLinks,
	} = useSiteMetadata()

	const data = useStaticQuery(graphql`
    {
			allFile(filter: {name: {regex: "/Icones_serveis_\\\\w+/"}}) {
				edges {
          node {
						name
						base
            publicURL
          }
        }
      }
    }
  `)

	const products = menuLinks.find(item => item.name === 'Serveis').submenuLinks

	return (
		<div className="serveis">
			{products.map((item, index) => <Product key={index} index={index} product={item} images={data.allFile.edges} />)}
		</div>
	)
}

export default Products
