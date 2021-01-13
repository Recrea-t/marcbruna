import "@fontsource/montserrat"
import "@fontsource/montserrat/900.css"

import React from "react"
import { Container } from "react-bootstrap"
import Img from "gatsby-image/withIEPolyfill"

import Heading from "../components/heading"

const Finstral = (props) => {
    const { name, image, catalog, configurator, text } = props.item

    return (
        <Container>
            <Heading heading={name} />

            <p className="text-sm" dangerouslySetInnerHTML={{ __html: text }}></p>

            <div className="configurador row row-cols-1 row-cols-sm-2 my-3 g-0">
                <Img className="d-none d-sm-block col-sm-7" fluid={image.childImageSharp.fluid} alt="" />

                <div className="col col-sm-5 bg-primary p-3 d-flex flex-column mx-auto">
                    <div className="m-3">
                        <Img fluid={configurator.image.childImageSharp.fluid} alt={configurator.name} />
                    </div>
                    <a href={configurator.url} className="btn btn-secondary mx-auto" target="_blank" rel="noreferrer" title="Configurador de Finstral">{configurator.name}</a>
                </div>
            </div>

            <div>
                <a href="/#contacte" className="btn btn-secondary mt-auto me-5" title="Demana'ns Pressupost">Demana Pressupost</a>
                <a href={catalog} className=" btn btn-secondary mt-auto" target="_blank" rel="noreferrer" title="Catàleg de Finstral">Catàleg</a>
            </div >
        </Container >
    )
}

export default Finstral
