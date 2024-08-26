import iconPizza from '/icon-pizza.png'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
// recordar condición ? true : false
import FormatoMiles from './FormatoMiles';
const NavBar = () => {
    const total = 25000;
    const token = false;

  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand>Pizzeria Mamma Mia!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Item className="cls-item-spacing">
                            <Button variant="outline-light" size="sm"><img src={iconPizza} alt="iconoPizza"></img> Home</Button>
                        </Nav.Item>
                        <Nav.Item className="cls-item-spacing">
                            <Button variant="outline-light" size="sm">{token ? '🔓Profile' : '🔐Login'}</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="outline-light" size="sm">{token ? '🔒Logout' : '🔐Register'}</Button>
                        </Nav.Item>
                    </Nav>
                    <div className="d-flex">
                        <Button variant="outline-info" size="sm">🛒Total: $<FormatoMiles numero={total} /></Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;
