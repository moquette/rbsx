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
const About = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
    AOS.refresh()
  }, [])
  return (
    <Section {...props}>
      <Row data-aos="fade-up">
        <Col>
          <h2 className="fs-1 fw-bolder text-uppercase">About</h2>
          <h3>
            10 years <span className="text-muted">strong!</span>
          </h3>
          <Row>
            <Col md={8}>
              <h4>Column</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lacus in
                felis rutrum, rutrum consequat nulla vehicula. Fusce ut tincidunt orci, sit amet
                faucibus metus.{' '}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lacus in
                felis rutrum, rutrum consequat nulla vehicula. Fusce ut tincidunt orci, sit amet
                faucibus metus.{' '}
              </p>
            </Col>
            <Col md={4}>
              <h4>Column</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  )
}

export default About
