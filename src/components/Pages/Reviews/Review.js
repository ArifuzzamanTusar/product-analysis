import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useReview from '../../../Hooks/useReview';
import Pagetitle from '../../global/Title/Pagetitle';
import Reviewloop from '../../Templates/Reviewloop/Reviewloop';

const Review = () => {
    const [review] = useReview();

    return (
        <div className='homeReview '>

            <Pagetitle title="Top Reviews" disc="What people says about Playstation VR" ></Pagetitle>
            <Container>            
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