import { Navbar, Container, Nav } from "react-bootstrap";
import { useState,useEffect } from "react";
// import logo from '../assets/img/logo.png';
// import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/github.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll =() =>{
            if(window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);
        return () =>window.removeEventListener("scroll",onScroll)
        
      }, [])

    const onUpdateActiveLink =(value) => {
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg navbar-dark fixed-top" className={scrolled ? "Scrolled": ""}>
      <Container>
        {/* <Navbar.Brand href="#home">
          <img 
            src={logo} 
            alt="Logo"  
          />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
            </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                {/* <a href="https://www.linkedin.com/in/harsh-kamble-22099835a/"><img src={navIcon1} alt="linkedin"></img></a> */}
                <a href="https://www.instagram.com/haarssshhhh._/"><img src={navIcon2} alt="Instagram"></img></a>
                <a href="https://github.com/ZoroXoro"><img src={navIcon3} alt="github"></img></a>
            </div>
            <button
              className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('connect')}
            >
              <a href="#connect" style={{ color: 'inherit', textDecoration: 'none' }}>
                <span>Let's Connect </span>
              </a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
