import { Col, Row } from 'react-bootstrap'

import AOS from 'aos'
import Section from '../../components/Section'
/******************************************
  Imports
******************************************/
import { useEffect } from 'react'

/******************************************
  Component
******************************************/
export default function Hero(props) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
    AOS.refresh()
  }, [])
  return (
    <Section {...props} className="hero" bg="dark">
      <Row>
        <Col xs={10} xm={9} data-aos="fade-up">
          <h2 className="display-2">{props.heading || 'RBSX International'}</h2>
          <h3 className="mb-4">
            <span className="display-4">
              WICKED <span className="fw-bold">fast</span>{' '}
            </span>
            <span className="text-muted">
              technology to get your application or business online{' '}
              <span className="fw-bold">today</span>.
            </span>
          </h3>
        </Col>
      </Row>
    </Section>
  )
}
