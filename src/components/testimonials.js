import React from "react";
import { Container } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Testimonial = (props) => {
  const { text } = props.testimonial;

  if (!text) {
    return null;
  }

  return (
    <div className="client card">
      <div className="card-body position-relative">
        <div className="profile position-absolute top-0 start-0 translate-middle-y rounded-circle bg-danger p-2"></div>
        <div className="card-subtitle mt-4">
          <p>
            <small className="text-muted">{text}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

const Logo = (props) => {
  const { name, url, logo } = props.testimonial;

  const imgStyle = {
    height: "auto",
  };

  if (!url) {
    return (
      <GatsbyImage
        className="client-logo"
        image={getImage(logo)}
        alt={name}
        objectFit="contain"
        imgStyle={imgStyle}
      />
    );
  }

  return (
    <a
      className="client-logo"
      href={url}
      title={name}
      target="_blank"
      rel="noopener"
    >
      <GatsbyImage
        image={getImage(logo)}
        alt={name}
        objectFit="contain"
        imgStyle={imgStyle}
      />
    </a>
  );
};

const Testimonials = ({ testimonials }) => {
  return (
    <Container className="testimonials scrollable">
      <div>
        {testimonials.map((item, index) => (
          <Testimonial key={index} testimonial={item} />
        ))}
      </div>
      <div className="py-5 justify-content-space-evenly">
        {testimonials.map((item, index) => (
          <Logo key={index} testimonial={item} />
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;
