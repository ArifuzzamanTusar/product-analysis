
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useReview from '../../../Hooks/useReview';
import Pagetitle from '../../global/Title/Pagetitle';
import Reviewloop from '../Reviewloop/Reviewloop';

const Homereview = () => {
    let [review] = useReview();
    review = review.slice(0,3);
    const navigate = useNavigate();
    const showAll = () =>{navigate(`/reviews`)}

    return (
        <div className='homeReview py-5'>
             <Pagetitle title="Top Reviews" disc="What people says about Playstation VR" ></Pagetitle>
            <Container>
               
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