/******************************************
  Imports
******************************************/
import { useEffect } from 'react'
import { Row, Col, Form, FloatingLabel, Spinner } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import Section from '../../components/Section'
import AOS from 'aos'

/******************************************
  Compo nent
******************************************/
const ContactForm = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
    AOS.refresh()
  }, [])
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    const serviceId = 'service_39zg13i'
    const templateId = 'template_k3xnqnt'
    const userId = 'user_sn4R7nQ9vRWZFgkzONumK'
    const name = data.name
    const email = data.email
    const message = data.message
    const templateParams = {
      name,
      email,
      message,
    }

    document.getElementById('spinner').removeAttribute('hidden')
    document.getElementById('status').setAttribute('hidden', 'hidden')

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
        document.getElementById('spinner').setAttribute('hidden', 'hidden')
        document.getElementById('status').textContent = 'Thank you: Message sent!'
        document.getElementById('status').parentNode.setAttribute('disabled', 'true')
        document.getElementById('status').setAttribute('disabled', 'true')
        document.getElementById('status').removeAttribute('hidden')
        document.getElementById('contact-form').reset()
      },
      function (error) {
        console.log('FAILED...', error)
        document.getElementById('spinner').setAttribute('hidden', 'hidden')
        document.getElementById('status').textContent = 'Try again later!'
        document.getElementById('status').parentNode.setAttribute('disabled', 'true')
        document.getElementById('status').removeAttribute('hidden')
        document.getElementById('contact-form').reset()
      }
    )
  }

  return (
    <Section {...props}>
      <Row data-aos="fade-up">
        <Col>
          <h2 className="fs-1 fw-bolder text-uppercase">Contact Us</h2>
          <h3>
            We&apos;d love to hear from <span className="text-muted">you!</span>
          </h3>
          <Row>
            <Col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lacus in
                felis rutrum, rutrum consequat nulla vehicula. Fusce ut tincidunt orci, sit amet
                faucibus metus.{' '}
              </p>
              <form id="contact-form" noValidate onSubmit={handleSubmit(onSubmit)}>
                <FloatingLabel controlId="name" label="Your Name *" className="mb-3">
                  <Form.Control
                    {...register('name', { required: true })}
                    as="input"
                    type="text"
                    placeholder="Your Name"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="email" label="Your Email *" className="mb-3">
                  <Form.Control
                    as="input"
                    type="email"
                    placeholder="Your Email"
                    {...register('email', {
                      required: true,
                      pattern:
                        // eslint-disable-next-line
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="message" className="mb-3" label="Your Message *">
                  <Form.Control
                    {...register('message', { required: true })}
                    as="textarea"
                    placeholder="Your Message"
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
                <button className="btn btn-primary" type="submit">
                  <Spinner
                    id="spinner"
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    hidden
                  />
                  <span id="status">Send</span>
                </button>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  )
}

export default ContactForm
