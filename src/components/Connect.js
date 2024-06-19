import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import pic from "../assets/catto.png";

export const Connect = () => {
    const formInitDetails = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState('');

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }

    const handleSubmit = () => {

    }

    return (
        <section className="d-flex contact justify-content-center align-items-center" id="contact">
            <Container className="px-5 mt-5">
                <Row className="d-flex align-items-stretch py-5">
                    <Col md={6} className="catto-col mb-5 px-0">
                        <img className="catto" src={pic} alt="catto"/>
                    </Col>
                    <Col className="form-col px-0 pt-5 pb-4 mb-5">
                        <h2 className="py-3">Let's connect!</h2>
                        <form onSubmit={handleSubmit}>
                            <Row className="px-2">
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.firstName} 
                                        placeholder="first name"
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.lastName} 
                                        placeholder="last name"
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="email" 
                                        value={formDetails.email} 
                                        placeholder="email"
                                        onChange={(e) => onFormUpdate('email', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="tel" 
                                        value={formDetails.phone} 
                                        placeholder="phone"
                                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                                    />
                                </Col>
                                <Col className="d-flex flex-column align-items-center px-5 py-3">
                                    <textarea 
                                        rows={6} 
                                        value={formDetails.message} 
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                    />
                                    <button className="w-100" type="submit" ><span>{buttonText}</span></button>
                                </Col>
                                {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                        </Col>
                                    }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}