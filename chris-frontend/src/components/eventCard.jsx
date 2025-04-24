export default function EventCard({ title, description, date }) {
    return (
      <div className="bg-white p-4 rounded shadow hover:shadow-lg">
        <h3 className="text-lg font-bold text-blue-700">{title}</h3>
        <p>{description}</p>
        <p className="text-sm text-gray-500">📅 {new Date(date).toLocaleString()}</p>
      </div>
    );
  }
  