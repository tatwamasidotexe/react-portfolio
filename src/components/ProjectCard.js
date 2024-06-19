import { Col } from "react-bootstrap";
import ghIcon from "../assets/icons/github-icon.png";

export const ProjectCard = ({title, description, imgurl, link}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox px-0 py-0 mb-5 mt-3">
                <img src={imgurl} alt={title}/>
                <div className="proj-text my-3 px-3 d-flex flex-column justify-content-center align-items-center text-center">
                    <h4 className="mb-0">{title}</h4>
                    <span>{description}</span>
                    <a href={link} target="_blank"><img src={ghIcon}/>  view source</a>
                </div>
            </div>
        </Col>
    );
}