import React from "react";
import Card from "./Card";
import { Row, Col } from "react-bootstrap";
import Commissioning from "../Images/Commissioning.jpg";
import Installation from "../Images/Installation.jpg";
import Maintainence from "../Images/Maintainence.jpg";
import Repair from "../Images/Repair.jpg";
import Replacement from "../Images/Replacement.jpg";
import Modification from "../Images/Modification.jpg";
const images = [
  Commissioning,
  Installation,
  Maintainence,
  Repair,
  Replacement,
  Modification,
];
const titles = [
  "Commissioning",
  "Installation",
  "Maintainence",
  "Repair",
  "Replacement",
  "Modification",
];
const details = [
  "An elevator commissioning checklist aims to clearly detail elevator specifications and accurately measure the elevator ride quality.",
  "Lift installation is the perfect solution to help your business grow quickly. What are you waiting for? Get in touch and let’s take your business to the next level. We offer tailor-made solutions to suit your needs.",
  "Usually maintenance is carried out before a problem to make sure one doesn’t occur at all, but sometimes maintenance is performed to actually fix a problem instead.",
  "Our company is always present on the matter of our estimate for the repair of the elevators.",
  "We recommend full replacement if your elevator has a small, cramped car, takes a long time to travel between floors, is often out of order and is 15 years old or more.",
  "We are one of the trusted and reliable name in extending the services to our clients in terms of its modifications and upgrade of existing lifts",
];
function Offers() {
  return (
    <Row className="my-5">
      {images.map((img, index) => (
        <Col
          className="d-flex justify-content-around my-5"
          key={titles[index]}
          lg={4}
          sm={8}
        >
          <Card
            image={img}
            title={titles[index]}
            details={details[index]}
            width={345}
            height={230}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Offers;
