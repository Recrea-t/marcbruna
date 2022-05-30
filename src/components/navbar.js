import React from "react";
import { Navbar, Nav, Col, Container, Dropdown } from "react-bootstrap";
import "../utils/font-awesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import finstral from "../images/logo-finstral.svg";
import logo from "../images/logo.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const FixedNavbar = ({ organization, social }) => {
  return (
    <Navbar bg="primary" expand="lg" fixed="top">
      <Container>
        <Navbar.Text className="p-0">
          <a href={`tel:${organization.phone.number}`} title="Truca'ns">
            <FontAwesomeIcon icon="phone" className="me-1 fa-flip-horizontal" />
          </a>
          <a href={`mailto:${organization.email}`} title="Escriu-nos">
            {organization.email}
          </a>{" "}
          | Distribuidor de{" "}
          <a
            className="logo-finstral"
            href="https://finstral.com"
            title="Finstral"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={finstral} alt="Finstral" />
          </a>
        </Navbar.Text>
        <Nav className="flex-row ms-auto p-0 mb-lg-0">
          <Nav.Link
            className="ps-2 ps-lg-0"
            href={`https://www.instagram.com/${social.instagram}`}
            target="_blank"
            rel="noreferrer"
            title="Segueix-nos a Instagram"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </Nav.Link>
          <Nav.Link
            className="ps-2 ps-lg-0"
            href={`https://www.facebook.com/${social.fbAppID}`}
            target="_blank"
            rel="noreferrer"
            title="Segueix-nos a Facebook"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </Nav.Link>
          <Nav.Link
            className="ps-2 ps-lg-0"
            href={`https://www.pinterest.com/${social.pinterest}`}
            target="_blank"
            rel="noreferrer"
            title="Segueix-nos a Pinterest"
          >
            <FontAwesomeIcon icon={["fab", "pinterest"]} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

const MenuLink = (props) => {
  const { link, name, submenuLinks } = props.link;

  if (link !== "dropdown") {
    return (
      <AnchorLink
        to={link}
        activeClassName="active"
        className="nav-link ms-lg-5 p-lg-0"
        title={name}
        onAnchorLinkClick={props.onClick}
      >
        <span>{name}</span>
      </AnchorLink>
    );
  }

  const isActive = props.pathname !== "/" ? " active" : "";
  return (
    <Dropdown alignRight className="nav-item ms-lg-5 p-lg-0">
      <Dropdown.Toggle
        as="a"
        role="button"
        id="navbarDropdown"
        className={`nav-link${isActive}`}
      >
        <span>{name}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu
        as="ul"
        align="right"
        className="dropdown-menu-dark dropdown-menu-end mt-lg-0"
      >
        {submenuLinks.map((item, index) => (
          <li key={index}>
            <Dropdown.Item href={item.link}>{item.name}</Dropdown.Item>
          </li>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const StaticNavbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "open",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <Navbar bg="white" expand="lg" static="top" aria-label="Main navigation">
        <Container>
          <Col className="div-navbar-brand cols-2 cols-md-4 mt-3">
            <Navbar.Brand href="/" title={this.props.defaultTitle}>
              <img
                src={logo}
                alt={this.props.defaultTitle}
                className="img-fluid"
              />
            </Navbar.Brand>
          </Col>
        </Container>
      </Navbar>
    );
  }
};

export { FixedNavbar, StaticNavbar };
