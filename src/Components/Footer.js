import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const Footer = () => {
  const useStyles = makeStyles({
    link: {
      margin: 10,
      fontSize: 30,
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
                  <b> +91 9889435997, +91-7860324614</b>
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
                  <b>+91 9889435997, +91-7860324614</b>
                </Typography>
              </MDBCol>
              <MDBCol md="6">
                <ul>
                  <li>
                    <h5 className="title">Links</h5>
                  </li>
                  <br />
                  <br />
                  <li className="list-unstyled">
                    <Link to="/" className={classes.link}>
                      Home
                    </Link>
                  </li>
                  <br />
                  <br />
                  <li className="list-unstyled">
                    <Link to="/doors" className={classes.link}>
                      Doors
                    </Link>
                  </li>
                  <br />
                  <br />
                  <li className="list-unstyled">
                    <Link to="/cabins" className={classes.link}>
                      Cabins
                    </Link>
                  </li>
                  <br />
                  <br />
                  <li className="list-unstyled">
                    <Link to="/aboutus" className={classes.link}>
                      Aboutus
                    </Link>
                  </li>
                  <br />
                  <br />
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div
            className="footer-copyright text-center py-3"
            style={{ backgroundColor: "#1a78c2" }}
          >
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: Syed
            </MDBContainer>
          </div>
        </MDBFooter>
      </Col>
    </Row>
  );
};

export default Footer;
