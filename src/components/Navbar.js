import logo from "../logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";

function navbar() {
    return (


        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" className="nav-logo"/>
                    Peter & Crystal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="https://steamcommunity.com/profiles/76561198407850352/">Info</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>


    )
}

export default navbar