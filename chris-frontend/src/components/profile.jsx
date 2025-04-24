import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

export default function Profile() {
  const [user, setUser] = useState({
    name: 'Rev. John Doe',
    email: 'revjohn@example.com',
    role: 'Clergy',
    picture: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container className="my-5">
      <Card className="p-4 shadow">
        <h3 className="text-primary mb-3">👤 My Profile</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="name" value={user.name} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control name="email" value={user.email} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control disabled value={user.role} />
          </Form.Group>
          <Button variant="primary">Update Profile</Button>
        </Form>
      </Card>
    </Container>
  );
}
