import { Col, Container, Row, Tab } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Nav from 'react-bootstrap/Nav';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';
import webIcon from "../assets/icons/web.png";
import dbIcon from "../assets/icons/data.png";

export function Skills () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const skillPercent = {
        'langs' : {
            'javascript' : 95,
            'python': 94,
            'php' : 75,
            'java' : 60
        },
        'web' : {
            'react' : 78,
            'laravel' : 80,
            'nodejs' : 53,
            'expressjs' : 39,
            'bootstrap' : 79,
            'django' : 40
        },
        'db' : {
            'mysql' : 89,
            'postgresql': 80,
            'mongodb' : 39
        },
        'more' : {
            'git' : 70,
            'tableau' : 40,
            'android': 35
        }
    }

    const [activeKey, setActiveKey] = useState('first');
    const [renderedTabs, setRenderedTabs] = useState({
        first: true,
        second: false,
        third: false,
        fourth: false
    });

    const handleSelect = (key) => {
        setActiveKey(key);
        setRenderedTabs(prevState => ({ ...prevState, [key]: true }));
    }

    const renderSkillsCarousel = (skills) => {
        return (
            <Carousel responsive={responsive} infinite={true} className='skilled-rider'>
                {Object.keys(skills).map(skill => (
                    <div className='item fade-in' key={skill}>
                        <CircularProgressbar
                            value={skills[skill]}
                            text={`${skills[skill]}%`}
                            styles={{
                                path: {
                                    stroke: `rgba(115, 18, 219, 0.9)`,
                                    strokeLinecap: 'round',
                                    transition: 'stroke-dashoffset 1s ease-out',
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                trail: {
                                    stroke: '#ffff',
                                    strokeLinecap: 'round',
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                text: {
                                    fill: 'white'
                                }
                            }}
                        />
                        <h5>{skill}</h5>
                    </div>
                ))}
            </Carousel>
        );
    }

    return (
        <section className='skill d-flex justify-content-center align-items-center' id='skills'>
            <Container className='mx-0'>
                <Row>
                    <Col>
                        <div className='skill-box'>
                            <h2>Skills</h2>
                            <p>My top skills and how I would rate myself at each</p>
                            <Tab.Container id='skills-tabs' activeKey={activeKey} onSelect={handleSelect}>
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">&lt;/&gt;</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><img src={webIcon} alt="Web" /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><img src={dbIcon} alt="Database" /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">more</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        {renderedTabs.first && renderSkillsCarousel(skillPercent.langs)}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        {renderedTabs.second && renderSkillsCarousel(skillPercent.web)}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        {renderedTabs.third && renderSkillsCarousel(skillPercent.db)}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        {renderedTabs.fourth && renderSkillsCarousel(skillPercent.more)}
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}