import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer py-4 bg-success text-center text-light">
      Copyright &copy; Najm Iman Delivery Services | Powerd by Iman Delivery
      Services | Developed by IT Team {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
