export default function MessageCard({ from, content, createdAt }) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <p><strong>From:</strong> {from}</p>
        <p className="text-gray-700 mt-2">{content}</p>
        <p className="text-sm text-gray-500 mt-1">🕒 {new Date(createdAt).toLocaleString()}</p>
      </div>
    );
  }
  