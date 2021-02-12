import React from "react";

import { Row, Col, Image } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Gallery = ({ name, images }) => {
  const [imageSelected, setImageSelected] = React.useState(images[0]);

  return (
    <Row className="row-cols-1 row-cols-sm-2 my-3 g-0">
      <Col className="col-sm-8 text-center" style={{ height: "75vh" }}>
        <Image
          className="preview"
          {...getImage(imageSelected).images.sources[0]}
          alt={`Imatge ${name} ampliada`}
        />
      </Col>
      <Col className="col-sm-4 pt-3 py-sm-0 px-sm-3">
        <div className="gallery">
          {images.map((item, index) => (
            <GatsbyImage
              key={index}
              role="button"
              tabIndex="0"
              className="shadow-sm"
              onClick={() => setImageSelected(item)}
              onKeyDown={() => setImageSelected(item)}
              alt={`Thumbnail ${name}`}
              image={getImage(item)}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Gallery;
