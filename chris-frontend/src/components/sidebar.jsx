import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-800 text-white h-screen p-4">
      <h2 className="text-lg font-bold mb-6">CHRIS Admin</h2>
      <ul className="space-y-4">
        <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/events" className="hover:underline">Events</Link></li>
        <li><Link to="/messages" className="hover:underline">Messages</Link></li>
      </ul>
    </aside>
  );
}
