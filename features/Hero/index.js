/******************************************
  Imports
******************************************/
import { Row, Col } from 'react-bootstrap'
import Section from '../../components/Section'

// import './styles.scss'

/******************************************
  Component
******************************************/
const Hero = (props) => {
  return (
    <Section {...props} className="hero" bg="dark">
      <Row>
        <Col xs={10} xm={9}>
          <h2 className="display-2">{props.heading || 'RBSX'}</h2>
          <h3 className="display-4 mb-4">
            A wicked fast{' '}
            <span className="text-muted">
              technology stack for your next website or application.
            </span>
          </h3>
        </Col>
      </Row>
    </Section>
  )
}

export default Hero
