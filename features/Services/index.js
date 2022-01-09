/******************************************
  Imports
******************************************/
import { Row, Col } from 'react-bootstrap'
import Section from '../../components/Section'

/******************************************
  Component
******************************************/
const Services = (props) => {
  return (
    <Section {...props}>
      <h2 className="fs-1 fw-bolder text-uppercase">Services</h2>
      <h3>
        Why we&apos;re number <span className="text-muted">ONE!</span>
      </h3>
      <Row>
        <Col md={4}>
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lacus in felis
            rutrum, rutrum consequat nulla vehicula. Fusce ut tincidunt orci, sit amet faucibus
            metus.{' '}
          </p>
        </Col>
        <Col md={4}>
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lacus in felis
            rutrum, rutrum consequat nulla vehicula. Fusce ut tincidunt orci, sit amet faucibus
            metus.{' '}
          </p>
        </Col>
        <Col md={4}>
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lacus in felis
            rutrum, rutrum consequat nulla vehicula. Fusce ut tincidunt orci, sit amet faucibus
            metus.{' '}
          </p>
        </Col>
      </Row>
    </Section>
  )
}

export default Services
