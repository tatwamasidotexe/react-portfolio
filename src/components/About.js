import { Col, Container, Row } from "react-bootstrap";
import pdf from "../assets/TatwamasiMishra_resume.pdf";

export const About = () => {
    return (
        <section className="about-section" id="about">
            <Container>
                <Row className="d-flex justify-content-end align-items-end w-100 p-md-5 ">
                    <Col className="d-flex flex-column align-items-start text-start py-4" sm={5} xs={12}>
                        <h2>Who am I?</h2>
                        <p>
                        My name is Tatwamasi, I'm 22 and an entry-level software developer based in Bhubaneswar, India.
                        {/* I have a strong passion for the technologies related to QA and AI. <br> */}
                        </p>
                        <p>Outside of software development, I have a keen interest in data science, especially in the field of natural language processing
                            and artificial intelligence. My time as a research intern at Indian Statistical Institute, Kolkata gave me an opportunity to contribute to
                            their Alzheimer's research, following which I had the wonderful opportunity to present my final year thesis titled <i>Structural Analysis of Human Brain Network in the Progresssion of Neurocognitive Disorder: From Alzheimer's Disease Perspective </i>
                             at the Xavier International Conference on Artificial Intelligence, 2024 - that's me in the background photo :)
                        </p>
                        <p>Outside of my regular activities, I'm a singer, badminton player, and I love all things cats and dogs.</p>
                        <p>
                        I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences.
                            <br/>Your visit to my portfolio is deeply appreciated!
                        </p>
                        <p>You can download my resume <a id="resume-link" href={pdf} target="_blank">here.</a></p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}