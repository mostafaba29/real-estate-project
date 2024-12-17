import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function FindAgentRibbon() {
    return (
        <section className="find-agent primary-bg">
      <Container className="d-flex flex-wrap align-items-center justify-content-lg-between text-lg-start text-center justify-content-center white-text p-3">
        <Row className="align-items-center w-100">
          <Col lg={8} className="find-agent-text mb-3 mb-lg-0">
            <h3>Find a Local Real State Agent Today</h3>
            <p>If you&apos;re looking to buy or sell a house. We&apos;ll help you make the most money possible.</p>
          </Col>
          <Col lg={4} className="text-lg-end text-center">
            <Button 
              variant="light" 
              className="find-agent-btn d-flex align-items-center justify-content-center primary-text white-bg px-4 py-2"
            >
              <span className="me-3">Find your location agent</span>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
    )
}