/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Section from '../../components/Section'
import AOS from 'aos'

export default function Team(props) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
    AOS.refresh()
  }, [])
  return (
    <Section {...props} className="team" id="team">
      <div data-aos="fade-up">
        <h2 className="fs-1 fw-bolder text-uppercase">Team</h2>
        <h3>
          10 years <span className="text-muted">strong!</span>
        </h3>
        <Row>
          <Col>
            <Row>
              <Col>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec
                  ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                </p>
              </Col>
            </Row>
            <Row className="g-3 pt-3">
              <Col md={4} className="text-center">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <img src="./team/01.jpg" alt="John Doe" className="rounded-circle mb-3" />
                  <h3>John Doe</h3>
                  <small>Director</small>
                  <p>Magni qui quod omnis unde et eos fuga et exercitationem.</p>
                </div>
              </Col>
              <Col md={4} className="text-center">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <img src="./team/02.jpg" alt="Mike Doe" className="rounded-circle mb-3" />
                  <h3>Mike Doe</h3>
                  <small>Sr. Developer</small>
                  <p>Magni qui quod omnis unde et eos fuga et exercitationem.</p>
                </div>
              </Col>
              <Col md={4} className="text-center">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <img src="./team/03.jpg" alt="Jane Doe" className="rounded-circle mb-3" />
                  <h3>Jane Doe</h3>
                  <small>Product Manager</small>
                  <p>Magni qui quod omnis unde et eos fuga et exercitationem.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Section>
  )
}
