import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  idNumber: string;
  regNo: string;
  role: string;
  profileImage?: string;
};

const AllUsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token"); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(token)
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token]);

  if (loading) return <p className="text-center">Loading users...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Users</h1>
      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow rounded-2xl p-4 flex justify-between items-center"
          >
            <div className="flex gap-4 items-center">
              <img
                src={user.profileImage || "/default-profile.png"}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-500">Phone: {user.phone}</p>
                <p className="text-sm text-gray-500">ID: {user.idNumber}</p>
                <p className="text-sm text-gray-500">Reg No: {user.regNo}</p>
                <p className="text-sm text-gray-500 capitalize">Role: {user.role}</p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsersPage;
