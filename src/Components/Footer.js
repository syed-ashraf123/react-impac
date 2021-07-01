import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";
const Footer = () => {
  return (
    <Row>
      <Col style={{ backgroundColor: "#2196f3" }}>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <Typography variant="h4" className="title">
                  Contact Us
                </Typography>
                <br />
                <Typography variant="h5">Head Office</Typography>
                <br />
                <Typography variant="subtitle1">
                  Shop No. 8, RK Plaza, near Ajanta Hospital, Tedhi Pulia
                  <br />
                  Lucknow-226022, Uttar Pradesh
                  <br />
                  <b> +91 9889435997, +91-8112303218, +91-7860324614</b>
                </Typography>

                <Typography variant="h5"> Branch Office</Typography>
                <br />
                <Typography variant="subtitle1">
                  58/209, Behind HP Petrol Pump, Kheria Mode, V.I.P Road
                  <br />
                  Agra-282001, Uttar Pradesh
                  <br />
                  <b>+91 9889435997, +91-8171279040, +91-8077042865</b>
                  <br />
                  <br />
                  UG-10, Saqlaine House, Philibhit Bypass Road, Bareilly City
                  <br />
                  Bareilly-243003, Uttar Pradesh
                  <br />
                  <b>+91 9889435997, +91-8112303218, +91-7860324614</b>
                </Typography>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div
            className="footer-copyright text-center py-3"
            style={{ backgroundColor: "#1a78c2" }}
          >
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </Col>
    </Row>
  );
};

export default Footer;
