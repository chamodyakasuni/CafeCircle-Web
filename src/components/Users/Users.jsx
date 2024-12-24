// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const User = () => {
    const [users, setUsers] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "", status: "", phone_number: "" });
    const [originalUser, setOriginalUser] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [isUserListVisible, setIsUserListVisible] = useState(true);
    const [editIndex, setEditIndex] = useState(null);
    const [alertMessage, setAlertMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get('http://localhost/cafecircle/api.php')
            .then(response => setUsers(response.data.users))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const validate = () => {
        const newErrors = {};
        if (!newUser.name) newErrors.name = "Name is required.";
        if (!newUser.email) newErrors.email = "Email is required.";
        if (!newUser.password) {
            newErrors.password = "Password is required.";
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(newUser.password)) {
            newErrors.password = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
        }
        if (!newUser.role) newErrors.role = "Role is required.";
        if (!newUser.status) newErrors.status = "Status is required.";
        if (!newUser.phone_number) newErrors.phone_number = "Phone number is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAddUser = () => {
        if (!validate()) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please fill in all required fields.',
                width: '250px',
                customClass: {
                    title: 'text-sm',
                    popup: 'text-sm',
                },
                confirmButtonColor: '#8b4513',
            });
            return;
        }

        const hashedPassword = btoa(newUser.password); // Simple base64 encoding for demonstration
        if (editIndex !== null) {
            axios.put('http://localhost/cafecircle/api.php', { id: users[editIndex].employee_id, ...newUser, password: hashedPassword })
                .then(response => {
                    console.log('User updated:', response.data);
                    const updatedUsers = [...users];
                    updatedUsers[editIndex] = response.data.user;
                    setUsers(updatedUsers);
                    setEditIndex(null);
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'User updated successfully!',
                        width: '250px',
                        customClass: {
                            title: 'text-sm',
                            popup: 'text-sm',
                        },
                        confirmButtonColor: '#8b4513',
                    });
                })
                .catch(error => console.error('Error updating user:', error));
        } else {
            axios.post('http://localhost/cafecircle/api.php', { ...newUser, password: hashedPassword })
                .then(response => {
                    console.log('User added:', response.data);
                    setUsers([...users, response.data.user]);
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'User added successfully!',
                        width: '250px',
                        customClass: {
                            title: 'text-sm',
                            popup: 'text-sm',
                        },
                        confirmButtonColor: '#8b4513',
                    });
                })
                .catch(error => console.error('Error adding user:', error));
        }
        setIsPopupOpen(false);
        setNewUser({ name: "", email: "", password: "", role: "", status: "", phone_number: "" });
        setErrorMessage("");
        setErrors({});
    };

    const handleEditUser = (index) => {
        const userToEdit = users[index];
        setNewUser({ ...userToEdit, password: atob(userToEdit.password) });
        setOriginalUser({ ...userToEdit, password: atob(userToEdit.password) });
        setEditIndex(index);
        setIsPopupOpen(true);
    };

    const handleDeleteUser = (index) => {
        axios.delete('http://localhost/cafecircle/api.php', { data: { id: users[index].employee_id } })
            .then(() => {
                const updatedUsers = users.filter((_, i) => i !== index);
                setUsers(updatedUsers);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'User deleted successfully!',
                    width: '250px',
                    customClass: {
                        title: 'text-sm',
                        popup: 'text-sm',
                    },
                    confirmButtonColor: '#8b4513',
                });
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setEditIndex(null);
        setOriginalUser(null);
        setErrors({});
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleUserListVisibility = () => {
        setIsUserListVisible(!isUserListVisible);
    };

    const closeAlert = () => {
        setIsAlertOpen(false);
        setAlertMessage("");
        setErrorMessage("");
    };

    const isSaveChangesDisabled = () => {
        return JSON.stringify(newUser) === JSON.stringify(originalUser);
    };

    const getPasswordStrength = (password) => {
        if (password.length < 8) return "weak";
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) return "strong";
        return "medium";
    };

    const getPasswordStrengthColor = (strength) => {
        switch (strength) {
            case "weak":
                return "bg-red-500";
            case "medium":
                return "bg-yellow-500";
            case "strong":
                return "bg-green-500";
            default:
                return "";
        }
    };

    const getPasswordStrengthText = (strength) => {
        switch (strength) {
            case "weak":
                return "";
            case "medium":
                return "";
            case "strong":
                return "";
            default:
                return "";
        }
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setNewUser({ ...newUser, password });
        setPasswordStrength(getPasswordStrength(password));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col sm:flex-row h-screen bg-lightwhite2">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Main Content */}
            <main className="flex-1 p-2">
                {/* Header */}
                <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2">
                    <div className="mb-1 lg:mb-0">
                        <h1 className="text-lg font-bold text-lightBrown">User Management</h1>
                        <p className="text-s text-lightBrown3">Manage our coffee shop staff and admin profiles</p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-1 lg:space-y-0 lg:space-x-1 ml-auto">
                        <input
                            type="text"
                            placeholder="Search users"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="px-2 py-2 rounded-3xl border border-lightBrown2 bg-lighterWhite text-lightBrown text-s items-baseline text-right"
                        />
                        <div className="flex items-center ml-auto">
                            <PersonIcon className="text-lightBrown mr-1 text-s" />
                            <span className="text-s text-lightBrown">Admin</span>
                        </div>
                    </div>
                </header>

                {/* Alert Modal */}
                {isAlertOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
                            <h3 className="mb-4 text-lightBrown font-bold">Alert</h3>
                            {alertMessage && (
                                <div className="mb-4 p-2 bg-green-100 text-green-700 rounded-lg">
                                    {alertMessage}
                                </div>
                            )}
                            {errorMessage && (
                                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-lg">
                                    {errorMessage}
                                </div>
                            )}
                            <div className="flex justify-end">
                                <button
                                    onClick={closeAlert}
                                    className="px-4 py-2 bg-lightBrown text-white rounded-lg"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* User Stats */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-2 bg-white rounded-3xl shadow-md border border-lightBrown2">
                        <h3 className="text-xs text-lightBrown3">Total Staff</h3>
                        <p className="text-md font-bold text-lightBrown">{users.length}</p>
                    </div>
                </section>

                {/* Add and Delete Buttons */}
                <div className="flex justify-between mb-4">
                    <button
                        onClick={openPopup}
                        className="px-4 py-2 bg-lightBrown text-white rounded-3xl shadow-md"
                    >
                        Add User
                    </button>
                    <button
                        onClick={toggleUserListVisibility}
                        className="px-4 py-2 bg-lightBrown text-white rounded-3xl shadow-md"
                    >
                        {isUserListVisible ? "Hide User List" : "Show User List"}
                    </button>
                </div>

                {isUserListVisible && (
                    <section className="mb-4">
                        <div className="p-4 bg-white rounded-lg shadow-md border border-lightBrown2">
                            <h3 className="mb-2 text-lightBrown font-bold">User List</h3>
                            <table className="w-full text-left text-lightBrown text-sm">
                                <thead>
                                    <tr>
                                        <th className="border-b border-lightBrown2 pb-2">Name</th>
                                        <th className="border-b border-lightBrown2 pb-2">Email</th>
                                        <th className="border-b border-lightBrown2 pb-2">Password</th>
                                        <th className="border-b border-lightBrown2 pb-2">Role</th>
                                        <th className="border-b border-lightBrown2 pb-2">Status</th>
                                        <th className="border-b border-lightBrown2 pb-2">Phone</th>
                                        <th className="border-b border-lightBrown2 pb-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user, index) => (
                                        <tr key={index}>
                                            <td className="py-2">{user.name}</td>
                                            <td className="py-2">{user.email}</td>
                                            <td className="py-2">{"********"}</td> {/* Hide password */}
                                            <td className="py-2">{user.role}</td>
                                            <td className="py-2">{user.status}</td>
                                            <td className="py-2">{user.phone_number}</td>
                                            <td className="py-2">
                                                <button
                                                    onClick={() => handleDeleteUser(index)}
                                                    className="px-2 py-1 bg-lightBrown text-white rounded-3xl mr-2"
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
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
                        <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
                            <h3 className="mb-4 text-lightBrown font-bold">{editIndex !== null ? "Edit User" : "Add New User"}</h3>
                            <div className="mb-2">
                                <label className="block text-sm text-lightBrown">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    value={newUser.name}
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    className="w-full px-2 py-1 border border-lightBrown2 rounded-lg"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm text-lightBrown">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    value={newUser.email}
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    className="w-full px-2 py-1 border border-lightBrown2 rounded-lg"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm text-lightBrown">Password <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={newUser.password}
                                        onChange={handlePasswordChange}
                                        className="w-full px-2 py-1 border border-lightBrown2 rounded-lg"
                                        onFocus={() => setIsPasswordFocused(true)}
                                        onBlur={() => setIsPasswordFocused(false)}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 px-2 py-1 text-lightBrown"
                                    >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </button>
                                </div>
                                {isPasswordFocused && (
                                    <div className="space-y-2 text-sm">
                                        <p className="text-gray-500 text-xs mt-1">
                                            Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.
                                        </p>
                                        <div className="flex items-center mt-1">
                                            <div className={`w-1/3 h-2 rounded ${getPasswordStrengthColor(passwordStrength)}`}></div>
                                            <p className={`ml-2 text-xs ${getPasswordStrengthColor(passwordStrength)}`}>
                                                {getPasswordStrengthText(passwordStrength)}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm text-lightBrown">Role <span className="text-red-500">*</span></label>
                                <select
                                    value={newUser.role}
                                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                    className="w-full px-2 py-1 border border-lightBrown2 rounded-lg"
                                >
                                    <option value="">Select Role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Staff">Staff</option>
                                </select>
                                {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm text-lightBrown">Phone <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    value={newUser.phone_number}
                                    onChange={(e) => setNewUser({ ...newUser, phone_number: e.target.value })}
                                    className="w-full px-2 py-1 border border-lightBrown2 rounded-lg"
                                />
                                {errors.phone_number && <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm text-lightBrown">Status <span className="text-red-500">*</span></label>
                                <select
                                    value={newUser.status}
                                    onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                                    className="w-full px-2 py-1 border border-lightBrown2 rounded-lg"
                                >
                                    <option value="">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                                {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status}</p>}
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
                                    className="px-4 py-2 bg-lightBrown text-white rounded-lg"
                                    disabled={editIndex !== null && isSaveChangesDisabled()}
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