import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Media, Card, CardBody, CardHeader } from 'reactstrap';

class AboutUs extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb> */}
                    <div className="col-12 mt-2">
                        <h3>About Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content mission-section">
                    <div className="col-12 col-md-6">
                        <h2>Our Mission</h2>
                        <p>
                            Started in October 2020, CollegeWeb quickly established itself as a revolutionary platform for colleges and students to connect and share information. Our mission is to provide colleges with an easy-to-use website creation tool while helping students find the right college based on their preferences. We believe in the power of genuine student reviews to guide future students in making informed decisions.
                        </p>
                        <p>
                            With CollegeWeb, we aim to create a comprehensive platform that bridges the gap between colleges and students, facilitating effective communication and engagement.
                        </p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card className="mt-2">
                            <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Founded By</dt>
                                    <dd className="col-6">Arkan Mansuri</dd>
                                    <dt className="col-6">Front-End</dt>
                                    <dd className="col-6">ReactJS, Redux, Bootstrap</dd>
                                    <dt className="col-6">Back-End</dt>
                                    <dd className="col-6">NodeJS, ExpressJS, MongoDB</dd>
                                    <dt className="col-6">Launch Date</dt>
                                    <dd className="col-6">1st October 2020</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 mt-5 mb-5">
                        <Card>
                            <CardBody className="quote">
                                <blockquote className="blockquote">
                                    <p className="mb-0">Everything that can be reviewed in the world, can be experienced.</p>
                                    <footer className="blockquote-footer mt-1">
                                        Arkan Mansuri,
                                        <cite title="Source Title">Founder of CollegeWeb</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row row-content corporate-section">
                    <div className="col-12 mt-2">
                        <h2>Corporate Leadership</h2>
                    </div>
                    <div className="col-12">
                        <div className="row mb-2">
                            <div className="col-12 col-md-3">
                                <img top cap className="img img-responsive thumb" src="/assets/images/arkalax.png" alt="founder image" />
                            </div>
                            <div className="col-12 col-md-9 pt-2 pl-md-0">
                                <h4>Arkan Mansuri</h4>
                                <h6>Founder & CEO (Chief Executive Officer)</h6>
                                <p>MERN stack web developer, passionate about improving college experiences.</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-12 col-md-3">
                                <img top cap className="img img-responsive thumb" src="/assets/images/intern.png" alt="intern image" />
                            </div>
                            <div className="col-12 col-md-9 pt-2 pl-md-0">
                                <h4>Laxit Shah</h4>
                                <h6>Intern</h6>
                                <p>Full-stack web developer, contributing to the growth of CollegeWeb.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
