import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FaRegStar } from "react-icons/fa6";
import { TbFlagStar, TbBellStar } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <Container fluid className="p-4">
      {/* About Section */}
      <Row className="align-items-center flex-wrap">
        <Col xs={12} md={6}  >
          <img
            src="https://img.freepik.com/premium-vector/marketing-vector-illustration_969863-10116.jpg"
            alt="Marketing"
            className="img-fluid"
          />
        </Col>
        <Col xs={12} md={6} className="mt-4 mt-sm-4">
          <h3><b>About Us</b> - Academy Path</h3>
          <p>
            At Academic Path, we believe that education is the bridge to a brighter future. Our mission is to create an inclusive space where learners of all backgrounds can access the tools, guidance, and inspiration they need to reach their goals. Whether you're a student striving for excellence, a teacher looking for innovative resources, or a lifelong learner exploring new horizons, we’re here to walk with you every step of the way. With expert insights, curated study materials, and a supportive community, Academic Path is more than just a website—it’s your partner in personal and academic growth.
          </p>
          <p>
           We are educators, mentors, tech enthusiasts, and learners ourselves—dedicated to making high-quality academic support accessible and inspiring. From personalized study strategies to cutting-edge learning tools, everything we offer is designed to adapt to the unique path each learner takes
          </p>
        </Col>
      </Row>

      {/* Course Cards */}
      <Row className="mt-4">
        {[
          {
            title: "Web Development",
            img: "https://stiffentechnologies.com/wp-content/uploads/2021/11/Web-Development.jpg",
            text: "Learn HTML & CSS basics and build web pages from scratch."
          },
          {
            title: "Python Developer",
            img: "https://www.learnerzhub.com/wp-content/uploads/2021/07/best-online-python-course.png",
            text: "Master Python for web apps, data analysis, and automation."
          },
          {
            title: "Java Developer",
            img: "https://tse4.mm.bing.net/th/id/OIP.vyi5W8mQ9cxUUlhlS7b54QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
            text: "Perfect for beginners and intermediates aiming for expert-level Java."
          },
          {
            title: "Power BI",
            img: "https://365datascience.com/resources/blog/siqhqywh9ye-power-bi-developer-skills.jpeg",
            text: "Create interactive reports and earn Power BI certification."
          }
        ].map((course, idx) => (
          <Col key={idx} xs={12} sm={6} md={3} className="mb-10 py-5">
            <Card className="shadow-lg h-100">
              <Card.Img variant="top" src={course.img} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Enroll Button */}
      <Row className="justify-content-center my-4">
        <Col xs="auto">
          <Link to="/courses">
            <Button variant="warning">Enroll Now</Button>
          </Link>
        </Col>
      </Row>

      {/* Features Section */}
      <section className="bg-secondary text-light p-4 mt-5 mb-5">
        <h3 className="text-center mb-4">Invest In Your Career</h3>
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <FaRegStar size={30} />
            <h6>Learn from the best</h6>
            <p>Expert-led courses and AI-powered guidance.</p>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <TbFlagStar size={30} />
            <h6>Earn valuable credentials</h6>
            <p>Certificates for every course you finish.</p>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <TbBellStar size={30} />
            <h6>Explore new skills</h6>
            <p>Access 10,000+ courses in AI, business, and tech.</p>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Landing;