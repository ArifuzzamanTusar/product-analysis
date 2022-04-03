
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useReview from '../../../Hooks/useReview';
import Reviewloop from '../Reviewloop/Reviewloop';

const Homereview = () => {
    let [review] = useReview();
    review = review.slice(0,3);
    const navigate = useNavigate();
    const showAll = () =>{navigate(`/reviews`)}

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
                <div className="py-2 text-center">
                    <Button onClick={showAll} variant={"primary"}>Show All Reviews</Button>
                </div>
            </Container>

        </div>
    );
};

export default Homereview;