/******************************************
  Imports
******************************************/
import { Row, Col } from 'react-bootstrap'
import Section from '../../components/Section'

/******************************************
  Component
******************************************/
export default function CallToAction(props) {
  return (
    <Section {...props} className="call-to-action" bg="dark">
      <div className="container" data-aos="zoom-in">
        <h2>Free Consultation</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <a href="#contact" className="btn btn-dark scrollto">
          Contact Us Today
        </a>
      </div>
    </Section>
  )
}
