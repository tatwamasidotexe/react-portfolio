import { Col, Container, Row } from "react-bootstrap";
import arrows from "../assets/right-arrows.png";
import { useEffect, useState } from "react";
import ghIcon from "../assets/icons/gh-neon.png";
import liIcon from "../assets/icons/linkedin-neon.png";
import igIcon from "../assets/icons/ig-neon.png";
import xIcon from "../assets/icons/x-neon.png";
import mail from "../assets/icons/mail.png";

export const Banner = () => {

    const [titleIndex, setTitleIndex] = useState(0);
    const [isBeingDeleted, setIsBeingDeleted] = useState(false);
    const titles = ['web developer', 'data science enthusiast'];
    const [title, setTitle] = useState('');
    const wordTimeGap = 1000;
    const [typeInterval, setTypeInterval] = useState(300 - Math.random() * 100);

    // useEffect to run the function responsible for typing and deleting animation
    useEffect(() => {
        const typer = setInterval(() => {
            typingHandler();
        }, typeInterval);

        return () => {
            clearInterval(typer);
        }
    }, [title]);

    function typingHandler () {
        let i = titleIndex % titles.length;
        let textToDisplay = titles[i];
        let updatingText = isBeingDeleted ? textToDisplay.substring(0, title.length - 1) : textToDisplay.substring(0, title.length + 1);

        setTitle(updatingText);

        if(isBeingDeleted) {
            setTypeInterval(prevTypeInterval => prevTypeInterval / 2);
        }

        if(!isBeingDeleted && updatingText === textToDisplay) {
            setIsBeingDeleted(true);
            setTypeInterval(wordTimeGap);
        } else if(isBeingDeleted && updatingText === '') {
            setIsBeingDeleted(false);
            setTitleIndex(titleIndex + 1);
            setTypeInterval(100);
        }

    }

    const [showSocials, setShowSocials] = useState(false);

    const handleButtonClick = () => {
        setShowSocials(!showSocials);
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="justify-content-center align-items-center w-100 p-md-5">
                    <Col className="d-flex flex-column align-items-start" xs={12}>
                        <p className="tagline my-0">Hi! I'm Tatwamasi.</p>
                        <h1 className="my-3">{`I am a `}<span className="rotating-text">{title}</span></h1>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quibusdam beatae accusantium amet placeat illum quam, inventore pariatur esse quos recusandae minima quis aspernatur, iusto est ipsa nobis quod mollitia?</p> */}
                        <Row className="socials-row">
                            <Col xs={12} className="px-0 d-flex justify-content-start px-2">
                                <button className="connect-btn" onClick={handleButtonClick}>Let's connect! <span><img className="arrows" src={arrows} alt="arrows"/></span></button>
                            </Col>
                            <Col xs={12} className={`socials-container d-flex justify-content-start pt-3 ${showSocials ? 'show' : ''}`}>
                                <a className="social-btn rounded-circle" id="mail" href="mailto:tatwamasi01@gmail.com"><img src={mail}/></a>
                                <a className="social-btn rounded-circle" id="linkedin" href="https://www.linkedin.com/in/tatwamasi-mishra-01/" target="_blank"><img src={liIcon}/></a>
                                <a className="social-btn rounded-circle" id="github" href="https://github.com/tatwamasidotexe/" target="_blank"><img src={ghIcon}/></a>
                                <a className="social-btn rounded-circle" id="instagram" href="https://www.instagram.com/_ashadeofblack/" target="_blank"><img src={igIcon}/></a>
                                <a className="social-btn rounded-circle" id="x" href="https://x.com/jooningat4am" target="_blank"><img src={xIcon}/></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section> 
    );
};