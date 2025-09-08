import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Courses() {
  const courseData = [
    {
      title: "Web Development",
      img: "https://stiffentechnologies.com/wp-content/uploads/2021/11/Web-Development.jpg",
      text: "We will learn the basic html & css concepts we need to know..."
    },
    {
      title: "Python Developer",
      img: "https://tse1.mm.bing.net/th/id/OIP.APh47q8X4LlgWeGBaLjMDgAAAA?w=470&h=394&rs=1&pid=ImgDetMain&o=7&rm=3",
      text: "Python is a versatile programming language known for its simplicity..."
    },
    {
      title: "Java Developer",
      img: "https://tse4.mm.bing.net/th/id/OIP.vyi5W8mQ9cxUUlhlS7b54QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      text: "Beginner in java programming, want to learn in-depth java programming..."
    },
    {
      title: "Power BI",
      img: "https://365datascience.com/resources/blog/siqhqywh9ye-power-bi-developer-skills.jpeg",
      text: "Take top-rated Microsoft Power BI courses or work toward your certification..."
    },
    {
      title: "Digital Marketing",
      img: "https://prod-discovery.edx-cdn.org/media/programs/card_images/1ff20015-8a46-48a8-8cfb-914d2f244b83-62701c6e666d.jpg",
      text: "Digital marketing is the practice of promoting brands through digital channels..."
    },
    {
      title: "Data Science",
      img: "https://tse2.mm.bing.net/th/id/OIP.FMvBDoSKPl55TBG1e_G6PAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
      text: "Data scientist is one of the best suited professions to thrive this century..."
    },
    {
      title: "The English Master Course",
      img: "https://tse3.mm.bing.net/th/id/OIP.6hYeL8RadB7HkOqmORr8GwHaEc?w=1073&h=644&rs=1&pid=ImgDetMain&o=7&rm=3",
      text: "English grammar, speaking, writing, and pronunciation with accent training..."
    },
    {
      title: "AI Engineer Course",
      img: "https://tse1.mm.bing.net/th/id/OIP.oN7q2RW7iK9Ak8thPDPhRQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      text: "AI Engineers help businesses utilize Generative AI by building AI-driven apps..."
    },
    {
      title: "AI Coding Course (2025)",
      img: "https://tse4.mm.bing.net/th/id/OIP.Py3vrzbrkQEkd1MrgXIEogHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      text: "This Complete AI Coding Course will teach coding basics and full-stack SaaS apps..."
    },
    {
      title: "Business Intelligence Analyst",
      img: "https://www.alphaacademy.org/wp-content/uploads/2022/11/Business-Intelligence-Analyst-Course.jpg",
      text: "Acquire technical skills recruiters look for when hiring BI Analysts..."
    },
    {
      title: "Graphic Design",
      img: "https://tse2.mm.bing.net/th/id/OIP.b6rl7a8rZbc0UKwyvfE0gAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      text: "Learn Adobe Photoshop, Illustrator, and InDesign for real-world projects..."
    },
    {
      title: "PMP Certification",
      img: "https://tse2.mm.bing.net/th/id/OIP.OYsTV9E_t8ZWv-SgwebmwgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      text: "Prepare for the PMP® Certification with this comprehensive Exam Prep Course..."
    }
  ];

  return (
    <Container fluid className="py-4">
      <h2 className="text-center mb-4">Trending Courses</h2>
      <Row>
        {courseData.map((course, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
            <Card className="shadow-lg" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={course.img} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title><b>{course.title}</b></Card.Title>
                <Card.Text>{course.text}</Card.Text>
                <Button variant="primary">More...</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Courses;