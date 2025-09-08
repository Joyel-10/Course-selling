import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function Plans() {
  return (
    <>
      <div className="container-fluid bg-dark text-light text-center p-4 mt-3">
        <div>
          <h6>Academy Path Plus</h6>
          <h1><b>Achieve your career goals with Academy Path</b></h1>
          <span>Subscribe to build job-ready skills from world-class institutions</span>
          <p>₹3,655/month, cancel anytime</p>
          <Link to={'*'}>
            <Button className="p-3">Start 7-day Free Trial</Button>
          </Link>
        </div>
      </div>

      <h2 className="text-center m-3 mt-4">Plans for you ...</h2>

      <section className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title><h3>Single learning program</h3></Card.Title>
                <Card.Text>
                  Learn a single topic or skill and earn a credential
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item><b>₹4,198 – ₹6,769 /month</b></ListGroup.Item>
                <ListGroup.Item>Access all courses within the learning program</ListGroup.Item>
                <ListGroup.Item>Earn a certificate upon completion after your trial ends</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title><h3>Academy Path Plus Monthly</h3></Card.Title>
                <Card.Text>
                  Complete multiple courses and earn credentials in the short term
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item><b>₹5,055 /month</b></ListGroup.Item>
                <ListGroup.Item>Access 10,000+ courses and Specializations from 170+ leading companies and universities</ListGroup.Item>
                <ListGroup.Item>Learn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title><h3>Academy Path Plus Annual</h3></Card.Title>
                <Card.Text>
                  Combine flexibility and savings with long-term learning goals
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item><b>₹34,190 /year</b></ListGroup.Item>
                <ListGroup.Item>Enjoy maximum flexibility to achieve work/life balance and learn at your own pace</ListGroup.Item>
                <ListGroup.Item>Save when you pay up front for the year</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>
      </section>

      <div className="text-center p-3 mt-3">
        <Link to={'*'}>
          <Button>Start Subscription →</Button>
        </Link>
      </div>
    </>
  );
}

export default Plans;