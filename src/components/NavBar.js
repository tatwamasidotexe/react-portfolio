import { useState } from "react";
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import pdf from "../assets/TatwamasiMishra_resume.pdf";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    function updateActiveLink(link) {
        if (activeLink === link) {
            setActiveLink(''); // Toggle off if clicking the active link again
        } else {
            setActiveLink(link); // Set the new active link
        }
    }

    return (
        <Navbar className='fixed-top blur-bg' variant="dark" expand="sm">
            <Container className="px-0">
                <Navbar.Brand
                    href="#home"
                    className={`text-light ${activeLink === 'home' ? 'active' : ''}`}
                    onClick={() => updateActiveLink('home')}
                >
                    &lt; tatwamasi /&gt;
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink
                            href={pdf}
                            target="_blank"
                            className="resume"
                        >
                            resume
                        </NavLink>
                        <NavLink
                            href="#about"
                            className={`text-light ${activeLink === 'about' ? 'active' : ''}`}
                            onClick={() => updateActiveLink('about')}
                        >
                            about
                        </NavLink>
                        <NavLink
                            href="#skills"
                            className={`text-light ${activeLink === 'skills' ? 'active' : ''}`}
                            onClick={() => updateActiveLink('skills')}
                        >
                            skills
                        </NavLink>
                        <NavLink
                            href="#projects"
                            className={`text-light ${activeLink === 'projects' ? 'active' : ''}`}
                            onClick={() => updateActiveLink('projects')}
                        >
                            projects
                        </NavLink>
                        
                        <NavLink
                            href="#contact"
                            className={`text-light ${activeLink === 'contact' ? 'active' : ''}`}
                            onClick={() => updateActiveLink('contact')}
                        >
                            contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};