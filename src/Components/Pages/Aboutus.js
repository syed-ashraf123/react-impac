import React from "react";
import { Row, Col, Jumbotron, Image } from "react-bootstrap";
import { Container, Typography } from "@material-ui/core";
import Logo from "../../Images/LOGO.jpg";
function Aboutus() {
  return (
    <Row>
      <Col>
        <Container>
          <Jumbotron>
            <Image
              src={Logo}
              className="img-responsive fit-image"
              style={{ height: 300, width: "100%" }}
            ></Image>
            <Typography variant="h4">
              Impac Lift in Lucknow is one of the leading businesses in the
              Elevator Dealers. Also known for Elevator Dealers, Elevator
              Manufacturers, Elevator Repair & Services, Elevator Installation
              Services, Elevator AMC, Capsule Elevator Dealers, Hospital
              Elevator Dealers, Automatic Elevator Dealers and much more. Find
              Address, Contact Number, Reviews & Ratings, Photos, Maps of Impac
              Lift, Lucknow.
            </Typography>
            <br />
            <br />
            <Typography variant="h2" align="center">
              Location & Overview
            </Typography>
            <br />
            <br />
            <Typography variant="h4">
              Established in the year 2017, Impac Lift in Lucknow, Lucknow is a
              top player in the category Elevator Dealers in the Lucknow. This
              well-known establishment acts as a one-stop destination servicing
              customers both local and from other parts of Lucknow. Over the
              course of its journey, this business has established a firm
              foothold in it’s industry. The belief that customer satisfaction
              is as important as their products and services, have helped this
              establishment garner a vast base of customers, which continues to
              grow by the day. This business employs individuals that are
              dedicated towards their respective roles and put in a lot of
              effort to achieve the common vision and larger goals of the
              company. In the near future, this business aims to expand its line
              of products and services and cater to a larger client base. In
              Lucknow, this establishment occupies a prominent location in
              Lucknow. It is an effortless task in commuting to this
              establishment as there are various modes of transport readily
              available. It is at Kurshi Road, Near By Tedhi Pulia, which makes
              it easy for first-time visitors in locating this establishment. It
              is known to provide top service in the following categories:
              Elevator Dealers, Elevator Manufacturers, Elevator Repair &
              Services, Elevator Installation Services, Elevator AMC, Capsule
              Elevator Dealers, Hospital Elevator Dealers, Automatic Elevator
              Dealers.
            </Typography>
            <br />
            <br />
            <Typography variant="h2" align="center">
              Products & Services Offered
            </Typography>
            <br />
            <br />
            <Typography variant="h4">
              Impac Lift in Lucknow has a wide range of products and / or
              services to cater to the varied requirements of their customers.
              The staff at this establishment are courteous and prompt at
              providing any assistance. They readily answer any queries or
              questions that you may have. Pay for the product or service with
              ease by using any of the available modes of payment, such as Cash,
              Cheque. This establishment is functional from 00:00 - 23:59.
            </Typography>
            <br />
          </Jumbotron>
        </Container>
      </Col>
    </Row>
  );
}

export default Aboutus;
