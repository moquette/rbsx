import ReactDOM from 'react-dom'
import { Button, Modal } from 'react-bootstrap'

const ModalComponent = ({ show, onHide, title, children }) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
      fullscreen="sm-down"
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent
