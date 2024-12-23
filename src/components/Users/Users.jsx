// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const User = () => {
    const [users, setUsers] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "", status: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isUserListVisible, setIsUserListVisible] = useState(true);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        axios.get('http://localhost/cafecircle/api.php')
            .then(response => setUsers(response.data.users))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleAddUser = () => {
        const hashedPassword = btoa(newUser.password); // Simple base64 encoding for demonstration
        if (editIndex !== null) {
            axios.put('http://localhost/cafecircle/api.php', { id: users[editIndex].employee_id, ...newUser, password: hashedPassword })
                .then(response => {
                    console.log('User updated:', response.data);
                    const updatedUsers = [...users];
                    updatedUsers[editIndex] = response.data.user;
                    setUsers(updatedUsers);
                    setEditIndex(null);
                })
                .catch(error => console.error('Error updating user:', error));
        } else {
            axios.post('http://localhost/cafecircle/api.php', { ...newUser, password: hashedPassword })
                .then(response => {
                    console.log('User added:', response.data);
                    setUsers([...users, response.data.user]);
                })
                .catch(error => console.error('Error adding user:', error));
        }
        setIsPopupOpen(false);
        setNewUser({ name: "", email: "", password: "", role: "", status: "" });
    };

    const handleEditUser = (index) => {
        const userToEdit = users[index];
        setNewUser({ ...userToEdit, password: atob(userToEdit.password) });
        setEditIndex(index);
        setIsPopupOpen(true);
    };

    const handleDeleteUser = (index) => {
        axios.delete('http://localhost/cafecircle/api.php', { data: { id: users[index].employee_id } })
            .then(() => {
                const updatedUsers = users.filter((_, i) => i !== index);
                setUsers(updatedUsers);
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setEditIndex(null);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleUserListVisibility = () => {
        setIsUserListVisible(!isUserListVisible);
    };

    return (
        <div className="flex flex-col sm:flex-row h-screen bg-[#F6F4F2]">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Main Content */}
            <main className="flex-1 p-2">
                {/* Header */}
                <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2">
                    <div className="mb-1 lg:mb-0">
                        <h1 className="text-lg font-bold text-[#8D5A5A]">User Management</h1>
                        <p className="text-s text-[#C5AFAF]">Manage our coffee shop staff and admin profiles</p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-1 lg:space-y-0 lg:space-x-1 ml-auto">
                        <input
                            type="text"
                            placeholder="Search users"
                            className="px-2 py-2 rounded-3xl border border-[#E8D5CF] bg-[#FFF9F6] text-[#8D5A5A] text-s items-baseline text-right"
                        />
                        <div className="flex items-center ml-auto">
                            <PersonIcon className="text-[#8D5A5A] mr-1 text-s" />
                            <span className="text-s text-[#8D5A5A]">Admin</span>
                        </div>
                    </div>
                </header>

                {/* User Stats */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-2 bg-white rounded-3xl shadow-md border border-[#E8D5CF]">
                        <h3 className="text-xs text-[#C5AFAF]">Total Staff</h3>
                        <p className="text-md font-bold text-[#8D5A5A]">{users.length}</p>
                    </div>
                </section>

                {/* Add and Delete Buttons */}
                <div className="flex justify-between mb-4">
                    <button
                        onClick={openPopup}
                        className="px-4 py-2 bg-[#8D5A5A] text-white rounded-3xl shadow-md"
                    >
                        Add User
                    </button>
                    <button
                        onClick={toggleUserListVisibility}
                        className="px-4 py-2 bg-[#8D5A5A] text-white rounded-3xl shadow-md"
                    >
                        {isUserListVisible ? "Hide User List" : "Show User List"}
                    </button>
                </div>

                {isUserListVisible && (
                    <section className="mb-4">
                        <div className="p-4 bg-white rounded-lg shadow-md border border-[#E8D5CF]">
                            <h3 className="mb-2 text-[#8D5A5A] font-bold">User List</h3>
                            <table className="w-full text-left text-[#8D5A5A] text-sm">
                                <thead>
                                    <tr>
                                        <th className="border-b border-[#E8D5CF] pb-2">Name</th>
                                        <th className="border-b border-[#E8D5CF] pb-2">Email</th>
                                        <th className="border-b border-[#E8D5CF] pb-2">Password</th>
                                        <th className="border-b border-[#E8D5CF] pb-2">Role</th>
                                        <th className="border-b border-[#E8D5CF] pb-2">Status</th>
                                        <th className="border-b border-[#E8D5CF] pb-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={index}>
                                            <td className="py-2">{user.name}</td>
                                            <td className="py-2">{user.email}</td>
                                            <td className="py-2">{"********"}</td> {/* Hide password */}
                                            <td className="py-2">{user.role}</td>
                                            <td className="py-2">{user.status}</td>
                                            <td className="py-2">
                                                <button
                                                    onClick={() => handleDeleteUser(index)}
                                                    className="px-2 py-1 bg-[#8D5A5A] text-white rounded-3xl mr-2"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    onClick={() => handleEditUser(index)}
                                                    className="px-2 py-1 bg-gray-500 text-white rounded-3xl"
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {/* Add User Popup */}
                {isPopupOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
                            <h3 className="mb-4 text-[#8D5A5A] font-bold">Add New User</h3>
                            <div className="mb-2">
                                <label className="block text-sm text-[#8D5A5A]">Name</label>
                                <input
                                    type="text"
                                    value={newUser.name}
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    className="w-full px-2 py-1 border border-[#E8D5CF] rounded-lg"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm text-[#8D5A5A]">Email</label>
                                <input
                                    type="email"
                                    value={newUser.email}
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    className="w-full px-2 py-1 border border-[#E8D5CF] rounded-lg"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm text-[#8D5A5A]">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={newUser.password}
                                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                        className="w-full px-2 py-1 border border-[#E8D5CF] rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 px-2 py-1 text-[#8D5A5A]"
                                    >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </button>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm text-[#8D5A5A]">Role</label>
                                <select
                                    value={newUser.role}
                                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                    className="w-full px-2 py-1 border border-[#E8D5CF] rounded-lg"
                                >
                                    <option value="">Select Role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm text-[#8D5A5A]">Status</label>
                                <select
                                    value={newUser.status}
                                    onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                                    className="w-full px-2 py-1 border border-[#E8D5CF] rounded-lg"
                                >
                                    <option value="">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={closePopup}
                                    className="px-4 py-2 bg-gray-300 text-black rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddUser}
                                    className="px-4 py-2 bg-[#8D5A5A] text-white rounded-lg"
                                >
                                    {editIndex !== null ? "Save Changes" : "Add User"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default User;