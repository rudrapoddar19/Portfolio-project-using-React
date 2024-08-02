import {useState, useEffect} from "react";
import {Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink =(value) => {
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span class="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "Home" ? 'active navbar-Link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink === "Skills" ? 'active navbar-Link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "Projects" ? 'active navbar-Link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Project</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a herf="www.linkedin.com/in/rudrapoddar/"><img src={navIcon1} alt="" /></a>
                <a herf="https://github.com/rudrapoddar19?tab=repositories"><img src={navIcon2} alt="" /></a>
                {/* <a herf="#"><img src={navIcon3} alt="" /></a> */}
            </div>
            <button className="vvd" onClick={()=> console.log('connect')}>
                <span>
                    Let's Connect
                </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}