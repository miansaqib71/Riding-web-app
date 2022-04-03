import React from "react";
import deliver from "../videos/deliver.mp4";
import Navbars from "../components/Navbar";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faB,
  faBolt,
  faF,
  faFaceFlushed,
  faI,
  faLocationDot,
  faN,
  faPhone,
  faT,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";
import company5 from "./images/company-5.webp";
import company2 from "./images/company-2.jpeg";
import company3 from "./images/company-3.png";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import talabat4 from "./images/talabat-4.jpg";
import careem2 from "./images/careem-2.jpg";
import noon1 from "./images/noon-3.jpg";
import { FloatingLabel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
const Home = () => {
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
      <hr style={{ background: "transparent" }} />
      <div className="mt-5 home-div-2">
        <Row className=" mt-5 home-col-2">
          <Col md={12} lg={6} className="mt-5 p-5 ">
            <h3 className="mt-5 mb-4">About Us</h3>
            <h5 className="mb-3">
              Najm Iman delivery Services Subsidiary of Elite Zone Established
              in 2021
            </h5>
            <p>
              Asslam-o-Alaikum! By the grace of Allah Almighty who made us the
              followers of His Prophet Hazrat Muhammad (PBUH). All the riders of
              Najam Iman Delivery Services are part of a professional company
              which is launching not only Delivery Services but also its various
              projects in furure. We will have seven branches in seven states of
              the UAE in Future. First of all work has been started in Dubai and
              then in other states with the passage of time.I am from Pakistan,
              the great Islamic country in Asia, and by the grace of God I have
              done M.Phil. in Mathematics. I wish our riders should not only
              work to earn money but also work as volunteer in case of any
              accident or heavenly calamity. Because in this temporary life,
              along with earning money, one should do good deeds for his better
              hereafter life.i am also working for Iman Foundation for needy
              people and Other social works in backward areas.
            </p>
          </Col>

          <Col md={12} lg={6} className="home-col-3 mt-5"></Col>
        </Row>
        <Row className="text-center ms-5 mt-5 mb-5">
          <Col>
            <h1>Services</h1>
            <h6>
              "Through passion and commitment,we leave no stone unturned in
              providing the best and fastest services to our customers."
            </h6>
          </Col>
        </Row>
        <Row className="ms-5">
          <Col>
            <Card className="p-4 cards" style={{ width: "22rem" }}>
              <Card.Img variant="top" src={talabat4} rounded />
              <Card.Body>
                <Card.Title>
                  <h3 className="mb-5">Talabat</h3>
                </Card.Title>

                <Button variant="danger">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 cards" style={{ width: "24rem" }}>
              <Card.Img variant="top" src={careem2} />
              <Card.Body>
                <Card.Title>
                  <h3 className="mb-5">Careem</h3>
                </Card.Title>

                <Button variant="danger">Read</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 cards" style={{ width: "24rem" }}>
              <Card.Img variant="top" src={noon1} />
              <Card.Body>
                <Card.Title>
                  <h3 className="mb-5">Noon</h3>
                </Card.Title>

                <Button variant="danger">Read</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <hr />
          <hr />
          <Col md={12} lg={12}>
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100 h-50 img-carousel"
                  src={company3}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={200}>
                <img
                  className="d-block w-100 h-50 img-carousel"
                  src={company2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block  w-100 h-50 img-carousel"
                  src={company5}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="mt-5 ">
          <Col md={6} lg={6} className="last-col">
            <h1 className="mt-5 mb-4">Contact</h1>
            <h6>
              <FontAwesomeIcon icon={faLocationDot} />
              Hamsa A complex Mezznine floor,Corridor 16,Office 446،Ansar
              Gallery Building Alkarama Dubai
            </h6>
            <h6 className="mt-3 mb-3">
              <FontAwesomeIcon icon={faPhone} />
              00971562360047
            </h6>
            <h6>
              <FontAwesomeIcon icon={faBolt} />
              imandeliveryservices@gmail.com
            </h6>
          </Col>
          <Col md={6} lg={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108848.87804348048!2d74.34403826497491!3d31.509670649647294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904273d42238b%3A0x2eecf26ca62f2c40!2sSoftware%20House!5e0!3m2!1sen!2s!4v1648909091059!5m2!1sen!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
