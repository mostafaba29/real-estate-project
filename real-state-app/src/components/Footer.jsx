import { Container, Row, Col, Image, Form, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faCaretRight 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faXTwitter, 
  faLinkedinIn, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer (){

    return (
        <footer className="secondary-bg py-5">
      <Container>
        {/* Upper Section */}
        <Row className="justify-content-between align-items-center pb-3">
          {/* Logo Column */}
          <Col lg={7} md={5} xs={12}>
            <Image src="../assets/imgs/logo@2x.png" alt="Logo" fluid />
          </Col>

          {/* Contact Information Column */}
          <Col lg={5} md={7} xs={12} className="d-flex justify-content-between flex-wrap py-3 py-lg-0">
            <div className="d-flex align-items-center my-1 align-self-end">
              <FontAwesomeIcon icon={faPhone} className="primary-text fs-2 me-2" />
              <div className="vr mx-3 white-bg"></div>
              <div>
                <p className="text-color m-0">Call us</p>
                <p className="white-text">(603) 555-0123</p>
              </div>
            </div>
            <div className="d-flex align-items-center my-1 align-self-end">
              <FontAwesomeIcon icon={faEnvelope} className="primary-text fs-2 me-2" />
              <div className="vr mx-3 white-bg"></div>
              <div>
                <p className="text-color m-0">Need live help</p>
                <p className="white-text">proty-support@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="secondary-border" />

        {/* Middle Section */}
        <Row className="py-3">
          {/* About Us */}
          <Col md={3} sm={6} xs={12} className="mb-3">
            <h3 className="white-text">About us</h3>
            <ListGroup variant="flush">
              {['Contact', 'Why choose us?', 'Customer reviews', 'Our Team', 'Careers with reality', 'Work with us'].map((item, index) => (
                <ListGroup.Item key={index} className="bg-transparent text-color border-0 px-0">
                  <FontAwesomeIcon icon={faCaretRight} className="primary-text me-1" />
                  <span>{item}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Popular House */}
          <Col md={3} sm={6} xs={12} className="mb-3">
            <h3 className="white-text">Popular house</h3>
            <ListGroup variant="flush">
              {['#Penthouses', '#Villas', '#Smart home', '#Apartments', '#Office', '#Bungalow'].map((item, index) => (
                <ListGroup.Item key={index} className="bg-transparent px-0">
                  <a href="#" className="text-decoration-none text-color">{item}</a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Quick Links */}
          <Col md={3} sm={6} xs={12} className="mb-3">
            <h3 className="white-text">Quick links</h3>
            <ListGroup variant="flush">
              {['Contact', 'Why choose us?', 'Customer reviews', 'Our Team', 'Careers with reality', 'Work with us'].map((item, index) => (
                <ListGroup.Item key={index} className="bg-transparent text-color border-0 px-0">
                  <FontAwesomeIcon icon={faCaretRight} className="primary-text me-1" />
                  <span>{item}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Newsletter */}
          <Col md={3} sm={6} xs={12} className="mb-3">
            <h3 className="white-text">Newsletter</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="text-color">Sign up to receive the latest articles</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-transparent secondary-border text-color"
                  
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Check 
                  type="checkbox" 
                  id="terms-checkbox"
                  className="me-2 bg-transparent secondary-border"
                  
                />
                <Form.Label htmlFor="terms-checkbox" className="text-color">
                  I have read and agree to the terms & conditions
                </Form.Label>
              </Form.Group>
              <Button 
                variant="primary" 
                className="white-text primary-bg px-4 py-2"
                
              >
                SUBSCRIBE
              </Button>
            </Form>
          </Col>
        </Row>

        <hr className="secondary-border" />

        {/* Bottom Section */}
        <Row className="align-items-center">
          <Col md={6} xs={12} className="text-color mb-3 mb-md-0">
            <p>copyright &copy; <b>PROTY - REAL ESTATE.</b> Designed & Developed by Themesflat</p>
          </Col>
          <Col md={6} xs={12} className="d-flex justify-content-md-end align-items-center">
            <p className="fw-bold white-text me-3">FOLLOW US</p>
            <div className="d-flex">
              {[faFacebookF, faXTwitter, faLinkedinIn, faInstagram].map((icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="me-2 secondary-border p-3 rounded-circle d-flex align-items-center justify-content-center"
                >
                  <FontAwesomeIcon icon={icon} className="white-text" />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    )
}