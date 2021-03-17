import React from "react";

import { Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Gallery = ({ name, images, thumbnails }) => {
  const [imageSelected, setImageSelected] = React.useState(images[0]);

  return (
    <Row className="row-cols-1 row-cols-sm-2 my-3 g-0">
      <Col className="col-sm-7 text-center preview">
        {images.map((item, index) => (
          <GatsbyImage
            key={item.id}
            className={item.id === imageSelected.id ? "is-active" : ""}
            loading={item.id === imageSelected.id ? "eager" : "lazy"}
            objectFit="contain"
            alt={name}
            image={getImage(item)}
          />
        ))}
      </Col>
      <Col className="col-sm-5 pt-3 py-sm-0 px-sm-3">
        <div className="gallery">
          {thumbnails.map((item, index) => (
            <GatsbyImage
              key={item.id}
              role="button"
              tabIndex="0"
              className={
                item.id === imageSelected.id
                  ? "border border-secondary border-1"
                  : "shadow"
              }
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
