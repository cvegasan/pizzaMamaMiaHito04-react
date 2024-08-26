import { useState } from 'react';
import {Button, Form, Row, Col } from 'react-bootstrap';
import imagenPizza from '../../public/headerPizza.jpg'
import MensajeModal from './MensajeModal';

const FormRegistro = () => {
    const [email, setEmail] = useState('');                     //Ingreso de la información
    const [password, setPassword] = useState('');               //Ingreso de la información
    const [confirmPassword, setConfirmPassword] = useState(''); //Ingreso de la información

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
        //confirmPassword
        if (confirmPassword.length==0){
            setModalTitle('Error');
            setModalMessage('Campo confirmación de contraseña en blanco.');
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

        //3. El password y la confirmación del password deben ser iguales.
        if (password !== confirmPassword) {
            setModalTitle('Error');
            setModalMessage('Las contraseñas no coinciden.');
            setShowModal(true);
            return;
        }

        setModalTitle('OK');
        setModalMessage(`Registro completado correctamente. Bienvenido, ${email}!`); // Mensaje de éxito
        setShowModal(true);

    };

    const cierreModal = () => setShowModal(false);

  return (
        <div className="form-root">
            <div className="form-inicial form-container">
                <Row className="justify-content-center align-items-center">
                    <Col md={7} className="d-none d-md-block bg-image"> {/* Oculta la imagen en pantallas pequeñas */}
                    <img
                        src={imagenPizza}
                        className="img-fluid img-size"
                        alt="imagen-registro"
                    />
                    </Col>
                    <Col md={5}>
                        <div>
                            <h3 className="text-center mt-2 mb-0 text-light">Formulario de registro</h3>
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

                            <Form.Group controlId="formPassword" className='pt-2'>
                            <Form.Label className="text-light">Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword" className='pt-2 pb-4'>
                            <Form.Label className="text-light">Confirmar Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirmar Contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            </Form.Group>

                            <Button variant="outline-warning" type="submit">Registrarse</Button>
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

export default FormRegistro;
