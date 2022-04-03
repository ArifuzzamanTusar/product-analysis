import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useReview from '../../../Hooks/useReview';
import Reviewloop from '../../Templates/Reviewloop/Reviewloop';

const Review = () => {
    const [review] = useReview();

    return (
        <div className='homeReview py-5'>
            <Container>
                <div className="section_title">
                    <h3 className='title_black text-uppercase font-weight-bold text-center'> Top Reviews</h3>
                    <p className='text-center'>What people says about Playstation VR</p>
                    <div className="d-flex justify-content-center">
                        <div className="divider"></div>
                    </div>
                </div>
                <div className="py-5 ">
                    <Row>
                        {
                            review.map(getReview => <Reviewloop key={getReview.id} data={getReview}></Reviewloop>)
                        }
                    </Row>

                </div>
            </Container>

        </div>
    );
};

export default Review;