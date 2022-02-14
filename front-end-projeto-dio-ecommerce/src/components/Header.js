import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../img/logo.png';

function Header(){
    return(
        <>
    <Navbar bg="light" variant="primary">
    <Container>
    <Navbar.Brand className='logo' href="#"><img width="100%" src={logo} alt="logo Mk Details"></img></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="/contato">Opnião de nossos clientes</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
    )
}

export default Header