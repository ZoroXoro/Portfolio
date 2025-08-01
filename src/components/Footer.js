import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
// import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-5">
            <div className="social-icon">
              {/* <a href="#"><img src={navIcon1} alt="Icon" /></a> */}
              <a href="https://www.instagram.com/haarssshhhh._/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/ZoroXoro"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}