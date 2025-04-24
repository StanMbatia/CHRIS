// import { useEffect, useState } from 'react';
// import axios from '../api/axios';
// import { getUser } from '../utils/auth';

// export default function Events() {
//   const [events, setEvents] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ title: '', description: '', date: '', assignedTo: '' });
//   const user = getUser();

//   const fetchEvents = async () => {
//     const token = localStorage.getItem('token');
//     const endpoint = user.role === 'admin' ? '/events' : '/events/mine';
//     const res = await axios.get(endpoint, { headers: { 'x-auth-token': token } });
//     setEvents(res.data);
//   };

//   const fetchUsers = async () => {
//     if (user.role === 'admin') {
//       const res = await axios.get('/auth/users', { headers: { 'x-auth-token': localStorage.getItem('token') } });
//       setUsers(res.data);
//     }
//   };

//   const createEvent = async () => {
//     await axios.post('/events', form, { headers: { 'x-auth-token': localStorage.getItem('token') } });
//     setForm({ title: '', description: '', date: '', assignedTo: '' });
//     fetchEvents();
//   };

//   useEffect(() => {
//     fetchEvents();
//     fetchUsers();
//   }, []);

//   return (
//     <div className="container my-5">
//       <h2 className="mb-4 text-primary">📅 Events</h2>

//       {user.role === 'admin' && (
//         <div className="card p-4 mb-5 shadow-sm">
//           <div className="card shadow-sm h-100 transition shadow-sm hover-shadow-lg border border-0">
//           <h4 className="mb-3 text-success">Create Event</h4>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <input type="text" placeholder="Title" className="form-control"
//                 value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
//             </div>
//             <div className="col-md-6">
//               <input type="datetime-local" className="form-control"
//                 value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
//             </div>
//             <div className="col-12">
//               <input type="text" placeholder="Description" className="form-control"
//                 value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
//             </div>
//             <div className="col-12">
//               <select className="form-select" onChange={(e) => setForm({ ...form, assignedTo: e.target.value })}>
//                 <option value="">Assign To</option>
//                 {users.map(u => <option key={u._id} value={u._id}>{u.name}</option>)}
//               </select>
//             </div>
//             <div className="col-12">
//               <button className="btn btn-primary w-100" onClick={createEvent}>Create</button>
//             </div>
//           </div>
//         </div>
//         </div>
//       )}

//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//         {events.map(event => (
//           <div key={event._id} className="col">
//             <div className="card h-100 shadow-sm">
//             <div className="card shadow-sm h-100 transition shadow-sm hover-shadow-lg border border-0">
//               <div className="card-body">
//                 <h5 className="card-title text-primary">{event.title}</h5>
//                 <p className="card-text">{event.description}</p>
//                 <p className="text-muted small">📆 {new Date(event.date).toLocaleString()}</p>
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
import { Container, Table, Form, Button, Badge } from 'react-bootstrap';
import '../styles/events.css';

const mockEvents = [
  { id: 1, title: 'Easter Service', date: '2025-04-30', location: 'Main Hall', clergy: 'Rev. John', notify: false },
  { id: 2, title: 'Youth Seminar', date: '2025-05-12', location: 'Annex Room', clergy: 'Rev. Mary', notify: false },
];

export default function Events() {
  const [filter, setFilter] = useState('');
  const [events, setEvents] = useState(mockEvents);

  const handleNotification = (id) => {
    setEvents(events.map(e => e.id === id ? { ...e, notify: !e.notify } : e));
  };

  const filtered = events.filter(e =>
    e.clergy.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container className="my-5">
      <h2 className="text-primary mb-4">Events</h2>
      <Form.Control
        type="text"
        placeholder="Filter by Clergy"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-3"
      />
      <Table hover responsive bordered>
        <thead className="table-primary">
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Location</th>
            <th>Clergy</th>
            <th>Notification</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(e => (
            <tr key={e.id}>
              <td>{e.date}</td>
              <td>{e.title}</td>
              <td>{e.location}</td>
              <td>{e.clergy}</td>
              <td>
                <Button
                  variant={e.notify ? 'success' : 'outline-primary'}
                  onClick={() => handleNotification(e.id)}
                >
                  {e.notify ? 'On 🔔' : 'Off'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
