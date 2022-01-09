/******************************************
  Imports
******************************************/
import { Row, Col } from 'react-bootstrap'
import Section from '../../components/Section'

/******************************************
  Component
******************************************/
const Hero = (props) => {
  return (
    <Section {...props} className="hero" bg="dark">
      <Row>
        <Col xs={10} xm={9}>
          <h2 className="display-2">{props.heading || 'RBSX'}</h2>
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

export default Hero
