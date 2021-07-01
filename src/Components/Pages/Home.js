import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Elevator from "../../Images/Elevator.jpg";
import { Typography } from "@material-ui/core/";
import Offers from "../Offers";
import Products from "../Products";
function Home() {
  return (
    <>
      <Row>
        <Col className="p-0 m-0" sm={12}>
          <Image
            src={Elevator}
            alt="Impac Lift"
            className="img-responsive fit-image"
            style={{ height: 700, width: "100%" }}
            fluid
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center m-5">
          <Typography variant="h1">What we Offer?</Typography>
        </Col>
        <hr />
      </Row>
      <Offers />
      <Row style={{ height: 200, backgroundColor: "gray" }}>
        <Col className="my-5 d-flex justify-content-center">
          <Typography variant="h2">Our Products</Typography>
        </Col>
      </Row>
      <Products />
    </>
  );
}

export default Home;
