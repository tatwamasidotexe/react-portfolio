import { Col, Container, Row } from 'react-bootstrap';
import thunkyardimg from '../assets/projects/thunkyard.png';
import spacegameImg from "../assets/projects/space-invadors.png";
import ucImg from "../assets/projects/unitconverter.jpg";
import xscmsImg from "../assets/projects/xscms.png";
import portfolioImg from "../assets/projects/portfolio.png";
import { ProjectCard } from './ProjectCard';

const projects = [
    {
        title: 'ThunkYard',
        description: 'To-do web application made using MERN stack.',
        imgurl: thunkyardimg,
        link: 'https://github.com/tatwamasidotexe/thunkyard2023'
    },
    {
        title: 'Space Invadors',
        description: 'Basic version of the game made using vanilla JS.',
        imgurl: spacegameImg,
        link: 'https://github.com/tatwamasidotexe/SpaceInvaders'
    },
    {
        title: 'UnitConverter',
        description: 'Android application that converts one unit of measurement to another.',
        imgurl: ucImg,
        link: 'https://github.com/tatwamasidotexe/UnitConverter'
    },
    {
        title: 'XSCMS',
        description: 'Xavier Student Convenience Management System, a PHP based portal made for student residents.',
        imgurl: xscmsImg,
        link: 'https://github.com/tatwamasidotexe/XSCMS'
    },
    {
        title: 'Portfolio website',
        description: 'This single page application made using React and Bootstrap.',
        imgurl: portfolioImg,
    },
]

export const Projects = () => {
    return (
        <section id='projects' className='project d-flex align-items-center'>
            <Container className='mb-5'>
                <Row>
                    <Col className='px-5'>
                        <h2>Projects</h2>
                        <p>Here and there</p>
                        <Row>
                            {
                                projects.map((project, i) => {
                                    return (
                                        <ProjectCard
                                            key={i}
                                            {...project}
                                        />
                                    );
                                })
                            }
                        </Row>                      
                    </Col>
                </Row>
            </Container>
        </section>
    )
}