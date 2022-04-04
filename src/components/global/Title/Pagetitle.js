import React from 'react';
import { Container } from 'react-bootstrap';

const Pagetitle = (props) => {
    const {title, disc} = props;
    return (
        <div className="page_title_area">
            <Container>
                <div className="section_title py-5">
                    <h3 className='title_black text-uppercase font-weight-bold text-center'> {title}</h3>
                    <p className='text-center'>{disc} </p>
                    <div className="d-flex justify-content-center">
                        <div className="divider"></div>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Pagetitle;