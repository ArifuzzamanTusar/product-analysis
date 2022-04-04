import React from 'react';
import { Container } from 'react-bootstrap';
import Pagetitle from '../../global/Title/Pagetitle';

const Blogs = () => {
    return (
        <div className="blog_page">
            <Pagetitle title="Question and answer" disc="Assignments Question answers"></Pagetitle>

            <Container>
                <div className="qa_Wrapper">
                    <h4 className="question">
                        Context API
                    </h4>
                    <hr></hr>
                    <div className="answers">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequuntur alias odit nihil nostrum corrupti beatae accusamus, omnis, assumenda ex non magni odio illum rerum qui? Sunt excepturi ex fugit, alias ipsam ratione aliquam quod eos unde illo tenetur autem saepe voluptas impedit illum fugiat harum quidem consectetur at quasi.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;