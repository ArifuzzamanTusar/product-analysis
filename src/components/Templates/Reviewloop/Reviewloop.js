import React from 'react';
import './Reviewloop.css'
import { Col, Image } from 'react-bootstrap';

const Reviewloop = (props) => {
    const { rating, name, image, review } = props.data;
    return (
        <Col md={4} >
            <div className="review_widget my-3">
                <div className="review_widget_inner">
                    <div className="d-flex align-items-center">
                        <Image className='avater' src={image}></Image>
                        <div className="name_review">
                            <h4 className='author'> {name}</h4>
                            <div className="deg">CEO, Microsoft</div>
                        </div>

                    </div>
                    <p className="review-text py-3">
                        "{review}"
                    </p>
                    <div className="rating">"{rating}</div>
                </div>
            </div>

        </Col>

    );
};

export default Reviewloop;