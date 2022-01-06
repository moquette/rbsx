/******************************************
  Imports
******************************************/
import { Row, Col } from 'react-bootstrap'
import Section from 'components/Section'
// import './styles.scss'

/******************************************
  Component
******************************************/
const SectionFour = (props) => {
  return (
    <Section {...props}>
      <Row>
        <Col>
          <h2>{props.heading || 'Section 4'}</h2>
          <Row>
            <Col md={6}>
              <h4>H4 Column 1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lacus in
                felis rutrum, rutrum consequat nulla vehicula. Fusce ut tincidunt orci, sit amet
                faucibus metus.{' '}
              </p>
            </Col>
            <Col md={6}>
              <h4>H4 Column 2</h4>
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

export default SectionFour
