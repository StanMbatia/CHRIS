// import { useEffect, useState } from 'react';
// import axios from '../api/axios';

// export default function Messages() {
//   const [messages, setMessages] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ to: '', content: '' });

//   const fetchMessages = async () => {
//     const res = await axios.get('/messages', {
//       headers: { 'x-auth-token': localStorage.getItem('token') }
//     });
//     setMessages(res.data);
//   };

//   const fetchUsers = async () => {
//     const res = await axios.get('/auth/users', {
//       headers: { 'x-auth-token': localStorage.getItem('token') }
//     });
//     setUsers(res.data);
//   };

//   const sendMessage = async () => {
//     await axios.post('/messages', form, {
//       headers: { 'x-auth-token': localStorage.getItem('token') }
//     });
//     setForm({ to: '', content: '' });
//     fetchMessages();
//   };

//   useEffect(() => {
//     fetchMessages();
//     fetchUsers();
//   }, []);

//   return (
//     <div className="container my-5">
//       <h2 className="text-primary mb-4">✉️ Messages</h2>
//       <div className="card p-4 mb-5 shadow-sm">
//       <div className="card shadow-sm h-100 transition shadow-sm hover-shadow-lg border border-0">
//         <h4 className="mb-3 text-success">Send a Message</h4>
//         <select className="form-select mb-3" onChange={(e) => setForm({ ...form, to: e.target.value })}>
//           <option value="">Choose Recipient</option>
//           {users.map(u => <option key={u._id} value={u._id}>{u.name}</option>)}
//         </select>
//         <textarea className="form-control mb-3" placeholder="Your message..."
//           value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}></textarea>
//         <button onClick={sendMessage} className="btn btn-success w-100">Send Message</button>
//       </div>
//       </div>

//       <div className="row row-cols-1 row-cols-md-2 g-4">
//         {messages.map(msg => (
//           <div key={msg._id} className="col">
//             <div className="card shadow-sm">
//             <div className="card shadow-sm h-100 transition shadow-sm hover-shadow-lg border border-0">
//               <div className="card-body">
//                 <h5 className="card-title text-primary">From: {msg.from?.name}</h5>
//                 <p className="card-text">{msg.content}</p>
//                 <p className="text-muted small">🕒 {new Date(msg.createdAt).toLocaleString()}</p>
//               </div>
//             </div>
//           </div>
//           </div>
//         ))}
//       </div>
//     </div>
    
//   );
// }
import React, { useState } from 'react';
import { Container, Tab, Tabs, Button, Modal, Form, ListGroup } from 'react-bootstrap';

const users = ['Rev. John', 'Rev. Mary', 'Clerk', 'Official'];

export default function Messages() {
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [message, setMessage] = useState('');
  const [inbox, setInbox] = useState([{ from: 'Clerk', content: 'Meeting tomorrow.' }]);
  const [sent, setSent] = useState([]);

  const sendMessage = () => {
    setSent([...sent, { to: selectedUser, content: message }]);
    setShow(false);
  };

  return (
    <Container className="my-5">
      <h2 className="text-primary mb-4">Messages</h2>
      <Button onClick={() => setShow(true)} variant="success" className="mb-3">
        📤 Compose Message
      </Button>

      <Tabs defaultActiveKey="inbox" id="messages-tabs" className="mb-3">
        <Tab eventKey="inbox" title="Inbox">
          <ListGroup>
            {inbox.map((msg, idx) => (
              <ListGroup.Item key={idx}>
                <strong>{msg.from}</strong>: {msg.content}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Tab>
        <Tab eventKey="sent" title="Sent">
          <ListGroup>
            {sent.map((msg, idx) => (
              <ListGroup.Item key={idx}>
                <strong>To {msg.to}</strong>: {msg.content}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Tab>
      </Tabs>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton><Modal.Title>Compose Message</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Select User ({users.length} total)</Form.Label>
            <Form.Select onChange={(e) => setSelectedUser(e.target.value)}>
              <option value="">Select a recipient</option>
              {users.map((user, i) => <option key={i}>{user}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
          <Button variant="primary" onClick={sendMessage}>Send</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
