import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-light p-2 mt-3">
                <div className="container-fluid text-primary">
                    <h3 className="mt-3"><b>Explore top skills and certifications</b></h3>
                    <hr className="bg-danger" style={{ height: '3px', border: 'none' }} />

                   
                    <div className="row mt-5">
                        <div className="col-12 col-md-3 mb-4">
                            <h5>Certifications by Skill</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Project Management Certification</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Cloud Certification</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Data Certification</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Data Analytics Certification</a></li>
                                <li><a href="#" className="text-light text-decoration-none">HR Management Certification</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <h5>Business Analytics & Intelligence</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Microsoft Excel</a></li>
                                <li><a href="#" className="text-light text-decoration-none">SQL</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Microsoft Power BI</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Data Analysis</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Business Analysis</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <h5>Leadership</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Leadership</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Management Skills</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Project Management</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Personal Productivity</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Emotional Intelligence</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <h5>Web Development</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Web Development</a></li>
                                <li><a href="#" className="text-light text-decoration-none">JavaScript</a></li>
                                <li><a href="#" className="text-light text-decoration-none">React JS</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Angular</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Java</a></li>
                            </ul>
                        </div>
                    </div>

                  
                    <div className="row mt-3">
                        <div className="col-12 col-md-3 mb-4">
                            <h5>In-demand Careers</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Data Scientist</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Project Manager</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Full Stack Web Developer</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Game Developer</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Cloud Engineer</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <h5>Data Science</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Python</a></li>
                                <li><a href="#" className="text-light text-decoration-none">SQL</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Machine Learning</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Deep Learning</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <h5>Communication</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Communication Skills</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Presentation Skills</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Public Speaking</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Writing</a></li>
                                <li><a href="#" className="text-light text-decoration-none">PowerPoint</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <h5>Taxation & Compliance</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">E-Taxation & Digital Compliance</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Income Tax Filing & Planning</a></li>
                                <li><a href="#" className="text-light text-decoration-none">GST Certification Course</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Corporate Tax Management in India & UAE</a></li>
                            </ul>
                        </div>
                    </div>

                  
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 p-3">
                            <span className="fs-2"><b>Academy Path</b></span>
                            <span className="ms-3">© 2025 Academy Path, Inc.</span>
                            <div className="mt-3">
                                <FaFacebook className="me-3" size={30} />
                                <FaWhatsapp className="me-3" size={30} />
                                <FaInstagram className="me-3" size={30} />
                                <FaTwitter className="me-3" size={30} />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 p-3">
                            <div className="d-flex flex-column align-items-md-end align-items-start">
                                <a href="#" className="text-light text-decoration-none mb-2">Privacy Policy</a>
                                <span>academyPath@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;