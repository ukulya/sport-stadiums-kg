import {Container, Nav, Navbar, OffcanvasBody, OffcanvasHeader, OffcanvasTitle} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from '../assets/images/logo.png'
import avatar from "../assets/images/avatar.png";

const Header = () => {
    return(
        <header>
            <Navbar bg="unset" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                    <Navbar.Collapse>
                        <Nav className="w-100">
                            <NavLink to="/" className='navLink navLink-ml'>Главная</NavLink>
                            <NavLink to="/" className='active-nav-link navLink'>Площадки</NavLink>
                            <NavLink to="/" className='navLink'>На карте</NavLink>
                            <NavLink to="/" className='navLink navLink-mr'>Новости</NavLink>
                            <NavLink to="/admin">
                                <img src={avatar} alt="user"/>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                        <OffcanvasHeader closeButton>
                            <OffcanvasTitle id="offcanvasNavbarLabel">Offcanvas</OffcanvasTitle>
                        </OffcanvasHeader>
                        <OffcanvasBody>
                            <Nav className="w-100">
                                <NavLink to="/" className='navLink navLink-ml'>Главная</NavLink>
                                <NavLink to="/" className='active-nav-link navLink'>Площадки</NavLink>
                                <NavLink to="/" className='navLink'>На карте</NavLink>
                                <NavLink to="/" className='navLink navLink-mr'>Новости</NavLink>
                                <NavLink to="/admin">
                                    <img src={avatar} alt="user"/>
                                </NavLink>
                            </Nav>
                        </OffcanvasBody>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header
