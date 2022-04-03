import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./screens/Contact";
import Home from "./screens/Home";

const App = () => {
  return (
    <>
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default App;
