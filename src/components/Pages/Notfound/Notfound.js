import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Notfound = () => {
    return (
        <div style={{ minHeight: '90vh' }} >
            <Container className='text-center'>

                <Image className='img-fluid ' src='assets/not-found.gif'></Image>
            </Container>
        </div>
    );
};

export default Notfound;