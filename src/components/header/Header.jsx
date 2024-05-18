import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-router-dom'
import Main from '../main/Main';
import Geninfo from '../main/Geninfo';
import Volume24no34 from'../publications/volume24no34';

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
        {/* <Nav>
           <AnchorLink className='nav-link text-white'><Link to='/'>Home</Link></AnchorLink>
          <Nav.Link className='nav-link text-white'  href=""><Link to='/publications'>
            Publications</Link>
          </Nav.Link>
          <Nav.Link className='nav-link text-white'  href=""><Link to='/editorial-board'>
            Editorial Board</Link>
          </Nav.Link>
          <Nav.Link className='nav-link text-white'  href=""><Link to='/generalinformation'>
            General information</Link>
          </Nav.Link>
            <NavDropdown className='text-white primary' title="About" id="basic-nav-dropdown">
            <NavDropdown.Item><AnchorLink href="#footer">Contact</AnchorLink></NavDropdown.Item>
            <NavDropdown.Item  ><AnchorLink href="#mission">Mission/Vision</AnchorLink></NavDropdown.Item>
          </NavDropdown> 
        </Nav> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
//    <Navbar expand="md" className="primary" variant="dark">
//    <Container className='navbar'>
//      <Navbar.Brand className='d-flex brand' href="#home"><div className="logo"></div>P<span className="bank">EL</span></Navbar.Brand>
//      <Navbar.Toggle aria-controls="basic-navbar-nav" />
//      <Navbar.Collapse id="basic-navbar-nav">
//        <Nav>
//          <Nav.Link href="#home">Home</Nav.Link>
//          <Nav.Link href="#link">Link</Nav.Link>
//          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//            <NavDropdown.Item href="#action/3.2">
//              Another action
//            </NavDropdown.Item>
//            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//            <NavDropdown.Divider />
//            <NavDropdown.Item href="#action/3.4">
//              Separated link
//            </NavDropdown.Item>
//          </NavDropdown>
//        </Nav>
//      </Navbar.Collapse>
//    </Container>
//  </Navbar>
  );
}
  return (
    <>
    
<Navigation/>
{/* <Main/>  */}
{/* <Geninfo/> */}
{/* <Volume24no34/> */}
</>
  );
}

export default Header;