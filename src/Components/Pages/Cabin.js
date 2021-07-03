import React from "react";
import Card from "../Card";
import { Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";

function Cabin() {
  window.scrollTo(0, 0);
  const cache = {};

  function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
  }
  // Note from the docs -> Warning: The arguments passed to require.context must be literals!
  importAll(
    require.context("../../Images/Cabins", false, /\.(png|jpe?g|svg)$/)
  );

  const images = Object.entries(cache).map((module) => module[1].default);
  return (
    <Row className="my-5">
      <center>
        <Typography variant="h2"> Type of Cabins </Typography>
      </center>
      {images.map((image) => (
        <Col
          className="d-flex justify-content-around my-5"
          key={Math.random()}
          lg={6}
          sm={12}
        >
          <Card
            image={image}
            title={image.split(".")[0].split("/").slice(-1).pop()}
            width={400}
            height={600}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Cabin;
