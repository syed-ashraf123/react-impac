import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
function ReactNavbar() {
  const useStyles = makeStyles({
    link: {
      margin: 10,
      fontSize: 20,
      textDecoration: "none !important",
      color: "black",
      "&:hover": {
        color: "gray",
        textDecoration: "none",
        cursor: "pointer",
      },
    },
  });

  const classes = useStyles();
  return (
    <Row>
      <Col className="p-0 m-0">
        <Navbar bg="light" expand="lg" style={{ minHeight: 80 }}>
          <Navbar.Brand>
            <i>
              &nbsp; <b style={{ fontSize: 30 }}>Impac Lift</b>
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" className={classes.link}>
                Home
              </Nav.Link>
              <Nav.Link href="/cabins" className={classes.link}>
                Cabins
              </Nav.Link>
              <Nav.Link href="/doors" className={classes.link}>
                Doors
              </Nav.Link>
              <Nav.Link href="/aboutus" className={classes.link}>
                Aboutus
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default ReactNavbar;
