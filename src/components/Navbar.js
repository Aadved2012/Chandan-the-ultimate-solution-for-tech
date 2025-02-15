import { Navbar, Nav, Container } from 'react-bootstrap';
import logoImg from "../images/chandan-logo.png"
import './Navbar.css'

const ResponsiveNavbar = () => {
  return (
    <Navbar  variant='light' expand="lg" style={{ display: "flex", justifyContent: "space-around", background: "#fff" }} id="home">
      <Container>
        <Navbar.Brand href="/" style={{display:"flex", alignItems: "center"}}><img src={logoImg} height="55" /><span id='logoTxt'>Chandan</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#home" className='nav-links'>Home</Nav.Link>
            <Nav.Link href="#products" className='nav-links'>Products</Nav.Link>
            <Nav.Link href="#contact" className='nav-links'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ResponsiveNavbar