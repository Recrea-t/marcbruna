import React from "react";
import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Layout>
      <Container className="not-found-container">
        <Row className="py-3">
          <Col className="col-12">
            <h2>Pàgina no trobada</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
