import {Container, Image, Nav, Navbar} from "react-bootstrap";
import logo from '../images/nike_PNG18.png'
import {AiOutlineShoppingCart} from "react-icons/ai";
import '../styles/navbar.css'

const navLinks = [
    {
        title: 'Whats New?',
        href: '#'
    },
    {
        title: 'Men',
        href: '#'
    },
    {
        title: 'Women',
        href: '#'
    },
    {
        title: 'Kids',
        href: '#'
    },
    {
        title: 'Personalize',
        href: '#'
    },
    {
        title: 'Collections',
        href: '#'
    },
    {
        title: 'Sales',
        href: '#'
    },
]
const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" fluid>
            <Container fluid>
                <Navbar.Brand href="#home"><Image height={50} src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="m-auto mid-nav-links">
                        {navLinks && navLinks.map(item =>
                        <Nav.Link className={'nav-link'} href={item.href}>{item.title}</Nav.Link>
                        )}
                        </Nav>

                    <Nav>
                        <AiOutlineShoppingCart size={25} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navigation
