/******************************************
  Imports
******************************************/
import { Row, Col } from 'react-bootstrap'
import Section from '../../components/Section'
// import './styles.scss'

/******************************************
  Component
******************************************/
const SectionThree = (props) => {
  return (
    <Section {...props}>
      <Row>
        <Col>
          <h2>{props.heading || 'Section 3'}</h2>
          <h3>
            This section contains <span className="text-muted">a sub-heading</span>
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

export default SectionThree
