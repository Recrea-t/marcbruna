import React from "react";
import { Container } from "react-bootstrap";

const StickyFooter = ({ title, author }) => {
  return (
    <footer className="footer bg-secondary">
      <Container fluid>
        <div className="credits text-center text-white">
          <span className="copyright">
            &copy; {new Date().getFullYear()} {title} | DISSENY:{" "}
            <a href={author.url} target="_blank" rel="noreferrer">
              {author.name}
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default StickyFooter;
