import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import img1 from '../public/img1.JPG';
import img3 from '../public/img3.JPG';
import '../styles/dashboard.css';



export default function Dashboard() {
  return (
    <>
      {/* Hero Carousel */}
      <Carousel fade className="w-100" style={{ maxHeight: '500px', overflow: 'hidden' }}>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" style={{ objectFit: 'cover', height: '500px' }} />
          <Carousel.Caption>
            <h3 className="fw-bold">Welcome to CHRIS System</h3>
            <p>Manage your church responsibilities with ease.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Second slide" style={{ objectFit: 'cover', height: '500px' }} />
          <Carousel.Caption>
            <h3 className="fw-bold">Track Events and Messages</h3>
            <p>Stay updated with real-time church activities.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Dashboard Stats */}
      <Container className="mt-5">
        <Row className="g-4">
          {[
            { title: "📅 Upcoming Events", text: "5 events scheduled this month." },
            { title: "✉️ Messages", text: "2 unread messages." },
            { title: "👤 Profile Setup", text: "Profile is 80% complete." }
          ].map((item, idx) => (
            <Col md={4} key={idx}>
              <Card className="shadow-sm border-0 rounded-4">
                <Card.Body>
                  <Card.Title className="text-primary">{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Quick Navigation */}
      <Container className="mt-5">
        <h4 className="text-primary mb-3">Quick Navigation</h4>
        <Row className="g-4">
          {[
            { title: 'Manage Events', desc: 'View, filter, and get alerts for events', btn: 'Go to Events', link: '/events', color: 'primary' },
            { title: 'Messages', desc: 'Inbox, Sent, and Compose New Messages', btn: 'Go to Messages', link: '/messages', color: 'success' },
            { title: 'Profile', desc: 'Update your information', btn: 'Go to Profile', link: '/profile', color: 'dark' }
          ].map((nav, idx) => (
            <Col md={4} key={idx}>
              <Card className="shadow-sm border-0 rounded-4 text-center p-4 h-100">
                <h5>{nav.title}</h5>
                <p>{nav.desc}</p>
                <Link to={nav.link}>
                  <Button variant={`outline-${nav.color}`}>{nav.btn}</Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
