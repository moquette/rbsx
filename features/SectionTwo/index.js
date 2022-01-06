/******************************************
  Imports
******************************************/
import { Row, Col } from 'react-bootstrap'
import Section from '../../components/Section'
// import './styles.scss'

/******************************************
  Component
******************************************/
const SectionTwo = (props) => {
  return (
    <Section {...props}>
      <Row>
        <Col>
          <h2>{props.heading || 'Section 2'}</h2>
          <Row>
            <Col md={4}>
              <h4>Column</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit.</p>
            </Col>
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
          </Row>
        </Col>
      </Row>
    </Section>
  )
}

export default SectionTwo
