import logo from "../logo.svg";
import ins from "../instagram.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap";

function navbar() {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" className="nav-logo"/>
                    Peter & Crystal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <a href="https://www.instagram.com/huangjia.yu/" className="me-3">
                            <img src={ins} alt="instagram" width="30px"/>
                        </a>
                        <a href="https://www.instagram.com/crystal.huang.0611/" >
                            <img src={ins} alt="instagram" width="30px"/>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbar