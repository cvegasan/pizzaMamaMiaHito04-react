import { Modal, Button} from 'react-bootstrap';


const MensajeModal = (props) => {
  return (
    <div>
      <Modal show={props.showModal} onHide={props.cierreModal} centered>
                    {/* Muestra el titulo del Modal */}
                    <Modal.Header closeButton>
                    <Modal.Title>
                    {props.modalTitle}
                    </Modal.Title>
                    </Modal.Header>
                    {/* Muestra el mensaje */}
                    <Modal.Body>{props.modalMessage}</Modal.Body>
                    {/* Agrega el botón al footer del Modal */}
                    <Modal.Footer>
                    <Button variant="outline-warning" onClick={props.cierreModal}>
                        Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>
    </div>
  )
}

export default MensajeModal;
