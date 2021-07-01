import React from "react";
import Card from "./Card";
import FullVision from "../Images/FullVision.jpg";
import HalfVision from "../Images/HalfVision.jpg";
import CenterOpening from "../Images/CenterOpening.jpg";
import Telescopic from "../Images/Telescopic.jpg";
import Imperforated from "../Images/Imperforated.jpg";
import Swing from "../Images/Swing.jpg";
import StainlessSteel from "../Images/StainlessSteel.jpg";
import Collapsible from "../Images/Collapsible.jpg";
import { Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";
const images = [
  FullVision,
  HalfVision,
  CenterOpening,
  Telescopic,
  Imperforated,
  Swing,
  Collapsible,
  StainlessSteel,
];
const titles = [
  "FullVision",
  "HalfVision",
  "CenterOpening",
  "Telescopic",
  "Imperforated",
  "Swing",
  "Collapsible",
  "StainlessSteel",
];
function Doors() {
  return (
    <Row className="my-5">
      <center>
        <Typography variant="h2"> Type of Doors </Typography>
      </center>
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

export default Doors;
