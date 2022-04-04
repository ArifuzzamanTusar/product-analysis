import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Notfound = () => {
    return (
        <div style={{ minHeight: '90vh' }} >
            <Container className='text-center'>

                <Image className='img-fluid ' src='https://res.cloudinary.com/tusar/image/upload/v1649090972/random-projects/not-found_d3cfes.gif'></Image>
            </Container>
        </div>
    );
};

export default Notfound;