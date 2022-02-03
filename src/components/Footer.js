import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "../assets/images/logo-light-grey.png";
import {NavLink} from "react-router-dom";
import fb from "../assets/images/facebook.png";
import ig from "../assets/images/instagram.png";

const Footer = () => {
    return(
        <footer>
            <Container>
                <Nav className="justify-content-between align-items-center">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <NavLink to="/" className='navLink navLink-ml'>Главная</NavLink>
                    <NavLink to="/" className='navLink'>Площадки</NavLink>
                    <NavLink to="/" className='navLink'>На карте</NavLink>
                    <NavLink to="/" className='navLink navLink-mr'>Новости</NavLink>
                    <NavLink to="/admin">
                        <img src={fb} alt="facebook"/>
                    </NavLink>
                    <NavLink to="/admin">
                        <img src={ig} alt="instagram"/>
                    </NavLink>
                </Nav>
                <p className='mt-5'>Copyright © 2022 By Ukulya</p>
            </Container>
        </footer>
    )
}
export default Footer