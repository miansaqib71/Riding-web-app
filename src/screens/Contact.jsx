import React from "react";
import deliver from "../videos/deliver.mp4";
import Navbars from "../components/Navbar";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
  return (
    <>
      <div className="main-home mb-5">
        <video autoPlay muted loop className="home-video">
          <source src={deliver} type="video/mp4" />
        </video>
        <Navbars />
        <Container fluid>
          <Row className="mt-5">
            <Col md={12} lg={8} className="home-col-1">
              <h5 className="mb-4">Welcome To Najm Iman Delivery</h5>
              <h3 className="mb-3">Your Most Trusted</h3>
              <h3 className="mb-3">Logistics Partner</h3>
              <h3 className="mb-3">Across The UAE.</h3>
            </Col>
            <Col md={12} lg={4} className="home-col-2 justify-content-center ">
              <Container className="p-3">
                <Form>
                  <hr style={{ width: "100px", border: "2px solid gray" }} />
                  <h4 className="mb-4">Make an Enquiry</h4>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Name*" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="Email*" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control type="text" placeholder="Phone*" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Information</option>
                      <option>Report a Problem</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Control
                    as="textarea"
                    placeholder="Additional Message"
                    className="mb-3"
                    style={{ height: "100px" }}
                  />

                  <Button variant="danger" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
