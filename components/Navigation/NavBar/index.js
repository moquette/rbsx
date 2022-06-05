import { Link as LinkItem, animateScroll } from 'react-scroll'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Swiper from './Swiper'
/******************************************
  Imports
******************************************/
import { useState } from 'react'

/******************************************
  Component
******************************************/
const sections = [
  { id: 'home', title: 'Home' },
  { id: 'services', title: 'Services' },
  { id: 'about', title: 'About' },
  { id: 'team', title: 'Team' },
  { id: 'testimonials', title: 'Testimonials' },
  { id: 'contact', title: 'Contact' },
]

const NavBar = (props) => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 400,
    })
  }

  return (
    <>
      <Navbar
        id="navbar"
        expand="md"
        fixed="top"
        className="navbar-white bg-white shadow-sm"
        expanded={show}
      >
        <Container>
          <Navbar.Brand>
            <NavItem
              className="navbar-brand"
              href={`#${sections[0].id}`}
              onClick={scrollToTop}
              offset={-92}
            >
              {props.title || 'RBSX'}
            </NavItem>
          </Navbar.Brand>
          <Navbar.Toggle
            className="border-0"
            aria-controls="offcanvasNavbar"
            onClick={() => handleShow()}
          />
          <Navbar.Collapse
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="justify-content-end pe-auto"
          >
            <Offcanvas.Header>
              <Offcanvas.Title id="offcanvasNavbarLabel">RBSX</Offcanvas.Title>
              <Navbar.Toggle
                onClick={() => handleClose()}
                aria-controls="offcanvasNavbar"
                bsPrefix="btn-close"
                aria-label="Close"
              />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                {sections.map((link, i) => (
                  <LinkItem
                    key={i}
                    to={`${link.id}`}
                    href={`#${link.id}`}
                    onClick={() => handleClose()}
                    activeClass="active"
                    spy={true}
                    duration={400}
                    offset={-95}
                  >
                    {link.title}
                  </LinkItem>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Swiper onChange={handleShow} />
    </>
  )
}

export default NavBar
