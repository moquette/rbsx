/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import Section from '../../components/Section'

export default function Testimonials(props) {
  const data = {
    title: 'Testimonials',
    quote: [
      {
        title: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.',
        image: '01.jpg',
      },
      {
        title: 'Bobby Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.',
        image: '02.jpg',
      },
      {
        title: 'Jane Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.',
        image: '03.jpg',
      },
    ],
  }
  useEffect(() => {
    new Glide('.glide', {
      type: 'carousel',
      perView: 2,
      autoplay: 6000,
      breakpoints: {
        768: {
          perView: 1,
        },
        992: {
          perView: 2,
        },
      },
    }).mount()
  })
  return (
    <Section {...props}>
      <h2 className="fs-1 fw-bolder text-uppercase">Testimonials</h2>
      <h3>
        Your success is our <span className="text-muted">success!</span>
      </h3>
      <div {...props} className="testimonials row g-3 pt-3 glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data.quote.map((d, i) => (
              <li key={i.toString()} className="glide__slide">
                <div className="testimonial-image">
                  <img
                    className="card-img-top rounded-circle"
                    src={`./testimonials/${d.image}`}
                    alt={d.image}
                  />
                </div>
                <div className="testimonial-content">
                  <q>{d.text}</q>
                  <p>~ {d.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls" hidden>
          <button type="button" className="glide__arrow glide__arrow--left" data-glide-dir="<">
            <i className="bi bi-arrow-left-short" />
          </button>
          <button type="button" className="glide__arrow glide__arrow--right" data-glide-dir=">">
            <i className="bi bi-arrow-right-short" />
          </button>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button type="button" className="glide__bullet" data-glide-dir="=0" aria-label="bullet" />
          <button type="button" className="glide__bullet" data-glide-dir="=1" aria-label="bullet" />
          <button type="button" className="glide__bullet" data-glide-dir="=2" aria-label="bullet" />
        </div>
      </div>
    </Section>
  )
}
