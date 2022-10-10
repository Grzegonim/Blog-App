import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="justify-content-between rounded mt-4 mb-4">
      <Navbar.Brand className="px-2">Blog.app</Navbar.Brand>
      <Nav>
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  )
};

export default NavBar;