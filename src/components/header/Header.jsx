import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

function Header() {
const Navigation = () =>{
  return(
    <Navbar collapseOnSelect className='primary' expand="lg"  variant="dark">
    <Container className='navbar text-white' >
      <Navbar.Brand className='d-flex brand align-items-center' href=""><Link to="/" className='text-white'><img className="logo" src="assets/logo.png"/></Link><h3><span className="brand-span"><Link to="/" className='text-white'>PEL</Link></span></h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
           <Nav.Link as={Link} to="/" className='nav-link text-white'>Home</Nav.Link>
          <Nav.Link as={Link} to="/publications" className='nav-link text-white'  href="">
            Publications
          </Nav.Link>
          <Nav.Link as={Link} to="/editorialboard" className='nav-link text-white'  href="">
            Editorial Board
          </Nav.Link>
          <Nav.Link as={Link} to="/generalinformation" className='nav-link text-white'  href="">
            General information
          </Nav.Link>
            <NavDropdown className='text-white primary' title="About" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/#footer" className='text-white primary'>Contact</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/#mission" className='text-white primary'>Mission/Vision</NavDropdown.Item>
          </NavDropdown> 
        </Nav>
             </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
  return (
    <>
    
<Navigation/>

</>
  );
}

export default Header;