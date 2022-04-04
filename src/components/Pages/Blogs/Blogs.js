import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Pagetitle from '../../global/Title/Pagetitle';

const Blogs = () => {
    return (
        <div className="blog_page">
            <Pagetitle title="Question and answer" disc="Assignments Question answers"></Pagetitle>

            <Container>
                <div className="qa_Wrapper">
                    <h4 className="question">
                        What is Context API?
                    </h4>
                    <hr></hr>
                    <div className="answers">
                        <p>The Context API is a React structure that allows you to exchange unique details and helps in prop-drilling resolution from all levels of your application.</p>
                        <p>The React Context API allows a React app to generate global variables that can be passed around. This is an alternative to "prop drilling," which involves passing props from grandparent to child to parent, and so on. Context is also marketed as a simpler, lighter approach to Redux state management.</p>
                    </div>
                </div>
                <div className="qa_Wrapper">
                    <h4 className="question">
                        What is Semantic HTML?
                    </h4>
                    <hr></hr>
                    <div className="answers">
                        <p>A semantic element's defining feature is that it clearly communicated its meaning to both the developer and the browser. These elements define its content really very clearly.</p>
                        <p>Example of some,

                            <ul>
                                <li> header: It defines a header for a web page.</li>
                                <li>nav: It defines a container for navigation links.</li>
                                <li>section: This defines a section in a web page.</li>
                                <li>article: This element contains the main part, containing information about the web page.</li>
                                <li>aside: The aside content is often placed as a sidebar in a document.</li>
                                <li>footer: It defines a footer for a document or a section.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="qa_Wrapper">
                    <h4 className="question">
                        Difference Between inline vs block vs inline-block elements
                    </h4>
                    <hr></hr>
                    <div className="answers">
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>inline</th>
                                    <th>inline-block</th>
                                    <th>block</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Displays an element as an inline element.  </td>
                                    <td>Displays an element as an inline-level block container. </td>
                                    <td>Displays an element as a block element.</td>
                                </tr>
                                <tr>

                                 
                                    <td>Any height and width properties will have no effect.</td>
                                    <td>We can set height and width values.</td>
                                    <td>It starts on a  new line and takes up the whole width</td>
                                </tr>
                             
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;