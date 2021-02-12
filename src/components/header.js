import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";

const Header = ({ description, image }) => {
  return (
    <div className="page-header">
      <GatsbyImage
        image={getImage(image)}
        alt={description}
        loading="eager"
        className="page-header-image"
      />
      <Container>
        <Row className="justify-content-start">
          <Col className="title-tagline">
            <h1 className="px-3">
              El teu fuster<span>al Pallars Sobirà</span>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
