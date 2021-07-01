import React from "react";
import { Row, Col } from "react-bootstrap";
import Industrial from "../Images/Industrial.jpg";
import Home from "../Images/Home.jpg";
import Goods from "../Images/Goods.jpg";
import Hospital from "../Images/Hospital.jpg";
import Car from "../Images/Car.jpg";
import Capsule from "../Images/Capsule.jpg";
import Card from "./Card";
const images = [Industrial, Home, Goods, Hospital, Car, Capsule];
const titles = ["Industrial", "Home", "Goods", "Hospital", "Car", "Capsule"];
function Products() {
  return (
    <Row className="my-5">
      {images.map((img, index) => (
        <Col
          className="d-flex justify-content-around my-5"
          sm={12}
          lg={6}
          key={titles[index]}
        >
          <Card image={img} title={titles[index]} width={600} height={400} />
        </Col>
      ))}
    </Row>
  );
}

export default Products;
