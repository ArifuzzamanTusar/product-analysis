import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
const Herosection = () => {
    return (
        <Container>
        <Row>
            <Col md={6} className='d-flex align-items-center'>
                <div className="py-5 ">
                    <div className="mainContainer ">
                        <h1 className='title_black text-uppercase font-weight-bold'>PlayStation VR</h1>
                        <h1 className='title_blue text-uppercase font-weight-bold'>Live the game</h1>
                        <p>Put yourself at the center of an extraordinary gaming universe powered by the PS VR headset and your PlayStation® console.</p>
                    </div>
                </div>

            </Col>
            <Col md={6}>
                <div className="FeaturedImage">
                    <Image className='img-fluid py-5' src='assets/pvr.webp'></Image>
                </div>
            </Col>
        </Row>
    </Container>
    );
};

export default Herosection;