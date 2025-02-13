import React, { useState } from "react";

const User = () => {
  const [userData] = useState({
    name: "John Doe",
    phone: "+1 234-567-8900",
    email: "john.doe@example.com",
  });

  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log("Password change requested");
    setShowPasswordChange(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">User Profile</h2>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="space-y-4">
          <div className="flex items-center border-b border-gray-200 pb-4">
            <label className="w-1/3 text-gray-600 font-medium">Name:</label>
            <span className="text-gray-800">{userData.name}</span>
          </div>

          <div className="flex items-center border-b border-gray-200 pb-4">
            <label className="w-1/3 text-gray-600 font-medium">
              Phone Number:
            </label>
            <span className="text-gray-800">{userData.phone}</span>
          </div>

          <div className="flex items-center border-b border-gray-200 pb-4">
            <label className="w-1/3 text-gray-600 font-medium">Email:</label>
            <span className="text-gray-800">{userData.email}</span>
          </div>

          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => setShowPasswordChange(!showPasswordChange)}
          >
            Change Password
          </button>
        </div>
      </div>

      {showPasswordChange && (
        <form
          className="bg-white rounded-lg shadow-md p-6 space-y-4"
          onSubmit={handlePasswordChange}
        >
          <input
            type="password"
            placeholder="Current Password"
            value={passwords.currentPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, currentPassword: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="New Password"
            value={passwords.newPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, newPassword: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={passwords.confirmPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, confirmPassword: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Update Password
          </button>
        </form>
      )}
    </div>
  );
};

export default User;
