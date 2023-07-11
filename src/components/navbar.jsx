import { Container, Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import history_icon from "../Assets/website-buttons/HOVERED History.png" 
import comics_icon from "../Assets/website-buttons/HOVERED Comics.png" 
import artwork_icon from "../Assets/website-buttons/HOVERED Artwork.png" 
import login_icon from "../Assets/website-buttons/HOVERED Login.png" 
import help_icon from "../Assets/website-buttons/HOVERED Help.png" 
import play_icon from "../Assets/website-buttons/HOVERED Play Now.png" 

export default function NavBar(props) {
    return <div>
        <Navbar>
            <Container >
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-split">
                    <Nav.Link href="#history"><img src={history_icon} className="button-pop"></img></Nav.Link>
                    <Nav.Link href="#comics"><img src={comics_icon} className="button-pop"></img></Nav.Link>
                    <Nav.Link href="#artwork"><img src={artwork_icon} className="button-pop"></img></Nav.Link>
                    <Nav.Link href="#play"><img src={play_icon} className="button-pop"></img></Nav.Link>
                    <Nav.Link href="#login"><img src={login_icon} className="button-pop"></img></Nav.Link>
                    <Nav.Link href="#help"><img src={help_icon} className="button-pop"></img></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}