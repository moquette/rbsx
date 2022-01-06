/******************************************
  Imports
******************************************/
import { useState } from 'react'
import Modal from '../Modal'
import TOS from '../Modal/data/tos'

/******************************************
  Styles
******************************************/
const Footer = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <footer className="footer text-center text-muted py-5">
      <p>
        <small>
          Copyright &copy;{new Date().getFullYear()} RBSX.
          <br />
          All rights reserved | <span onClick={handleShow}>Terms of Service</span>.
        </small>
      </p>
      <Modal show={show} onHide={handleClose} title="Terms of Service">
        <TOS />
      </Modal>
    </footer>
  )
}

export default Footer
