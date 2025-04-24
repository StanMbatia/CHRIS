export default function UserCard({ name, email, role }) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-bold">{name}</h4>
        <p>{email}</p>
        <p className="text-sm text-gray-500">Role: {role}</p>
      </div>
    );
  }
  