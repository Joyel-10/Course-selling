import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <>
            <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <Row className="w-100 justify-content-center">
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <Card className="shadow bg-dark">
                            <Card.Body>
                                <h3 className="text-center text-light mb-4">Login</h3>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formName">

                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formEmail">

                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPassword">

                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                 <Link to={'*'}>
                                        <Button variant="primary" type="submit" className="w-100">
                                            Login
                                        </Button>
                                 </Link>
                                </Form>

                                <div className="mt-3 text-center">
                                    <Link to={'*'}><a href="/forgot-password" className="d-block">Forgot Password?</a></Link>
                                   <Link to={'*'}> <span>Don't have an account? <a href="/signup">Sign Up</a></span></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Login