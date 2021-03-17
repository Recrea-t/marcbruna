import React from "react";
import { Container } from "react-bootstrap";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Heading from "../components/heading";
import Gallery from "../components/gallery";

const Servei = (props) => {
  const { name, images, text, thumbnails } = props.servei;

  return (
    <Container>
      <Heading heading={name} />

      <p className="text-sm">{text}</p>

      <Gallery name={name} images={images} thumbnails={thumbnails} />
      <AnchorLink
        to="/#contacte"
        className="btn btn-secondary mt-auto"
        title="Demana pressupost"
        stripHash
      />
    </Container>
  );
};

export default Servei;
