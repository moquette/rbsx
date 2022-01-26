/******************************************
  Imports
******************************************/
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Section from '../../components/Section'
import AOS from 'aos'

/******************************************
  Component
******************************************/
const Services = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
    AOS.refresh()
  }, [])
  return (
    <Section {...props}>
      <div data-aos="fade-up">
        <h2 className="fs-1 fw-bolder text-uppercase">Services</h2>
        <h3>
          Products and <span className="text-muted">Services</span>
        </h3>
        <Row>
          <Col md={4}>
            <h4>Lorem Ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lacus in
              felis rutrum, rutrum consequat nulla vehicula. Fusce ut tincidunt orci, sit amet
              faucibus metus.{' '}
            </p>
          </Col>
          <Col md={4}>
            <h4>Lorem Ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lacus in
              felis rutrum, rutrum consequat nulla vehicula. Fusce ut tincidunt orci, sit amet
              faucibus metus.{' '}
            </p>
          </Col>
          <Col md={4}>
            <h4>Lorem Ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lacus in
              felis rutrum, rutrum consequat nulla vehicula. Fusce ut tincidunt orci, sit amet
              faucibus metus.{' '}
            </p>
          </Col>
        </Row>
      </div>
    </Section>
  )
}

export default Services
