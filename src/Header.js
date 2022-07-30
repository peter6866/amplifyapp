import logo from "./logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";

function Header() {
    return (
        <header>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>
                        <img src={logo} className="nav-logo"/>
                        Peter & Crystal
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://steamcommunity.com/profiles/76561198407850352/">Info</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>

        </header>
    )
}

export default Header