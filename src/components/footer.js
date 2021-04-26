import React from "react";
import { Link } from "gatsby";
import { Container } from "react-bootstrap";

const StickyFooter = ({ title, author }) => {
  return (
    <footer className="footer bg-secondary">
      <Container fluid>
        <div className="credits text-center text-white">
          <span className="copyright">
            &copy; {new Date().getFullYear()} {title} |{" "}
            <Link to="/politica-de-galetes" title="Política de cookies">
              Política de galetes
            </Link>
            | DISSENY:{" "}
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
