import { useState } from 'react';
import {Button, Form, Row, Col } from 'react-bootstrap';
import imagenLogin from '/loginPizzaCandado.jpg'
import MensajeModal from './MensajeModal';

const FormLogin = () => {
    const [email, setEmail] = useState('');                     //Ingreso de la información
    const [password, setPassword] = useState('');               //Ingreso de la información

    const [showModal, setShowModal] = useState(false);          // Estado para mostar el componente MODAL
    const [modalMessage, setModalMessage] = useState('');       // Estado para el mensaje
    const [modalTitle, setModalTitle] = useState('');           // Estado para el título del modal ERROR u OK
    const validaFormulario = (e) => {
        e.preventDefault();
        //1. Todos los campos son obligatorios (no pueden estar vacíos).
        //email
        if (email.length==0){
            setModalTitle('Error');
            setModalMessage('Correo electrónico en blanco.');
            setShowModal(true);
            return;
        }
        //password
        if (password.length==0){
            setModalTitle('Error');
            setModalMessage('Campo contraseña en blanco.');
            setShowModal(true);
            return;
        }

        //2. El password debe tener al menos 6 caracteres
        if (password.length < 6){
            setModalTitle('Error');
            setModalMessage('La contraseña no cumple el mín requerido (6 caracteres).');
            setShowModal(true);
            return;
        }

        setModalTitle('OK');
        setModalMessage(`Bienvenido, ha iniciado sesión como ${email}!`); // Mensaje de éxito
        setShowModal(true);

    };

    const cierreModal = () => setShowModal(false);

  return (
        <div className="form-root-login">
            <div className="form-inicial form-container">
                <Row className="justify-content-center align-items-center">
                    <Col md={7} className="d-none d-md-block bg-image"> {/* Oculta la imagen en pantallas pequeñas */}
                    <img
                        src={imagenLogin}
                        className="img-fluid img-size"
                        alt="imagen-registro"
                    />
                    </Col>
                    <Col md={5}>
                        <div>
                            <h3 className="text-center mt-2 mb-0 text-light">Login</h3>
                            <h5 className="text-center mt-0 mb-4 text-light">Pizzeria Mamamia</h5>
                        </div>
                        <Form onSubmit={validaFormulario}>
                            <Form.Group controlId="formEmail" className="p-0">
                                <Form.Label className="text-light">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className='pt-2  pb-4'>
                            <Form.Label className="text-light">Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </Form.Group>
                            <Button variant="outline-warning" type="submit">Login</Button>
                        </Form>
                        </Col>
                </Row>
                <MensajeModal
                    showModal={showModal}
                    cierreModal={cierreModal}
                    modalTitle={modalTitle}
                    modalMessage={modalMessage}
                />
            </div>
        </div>
  );
};

export default FormLogin;