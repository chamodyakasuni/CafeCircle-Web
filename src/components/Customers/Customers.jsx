// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Customers = () => {
    const [customers, setCustomers] = useState([
        { name: "Alice Johnson", email: "alice.johnson@example.com", status: "Active" },
        { name: "Bob Brown", email: "bob.brown@example.com", status: "Inactive" },
    ]);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newCustomer, setNewCustomer] = useState({ name: "", email: "", password: "", status: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isCustomerListVisible, setIsCustomerListVisible] = useState(true);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddCustomer = () => {
        const hashedPassword = btoa(newCustomer.password); // Simple base64 encoding for demonstration
        if (editIndex !== null) {
            const updatedCustomers = [...customers];
            updatedCustomers[editIndex] = { ...newCustomer, password: hashedPassword };
            setCustomers(updatedCustomers);
            setEditIndex(null);
        } else {
            setCustomers([...customers, { ...newCustomer, password: hashedPassword }]);
        }
        setIsPopupOpen(false);
        setNewCustomer({ name: "", email: "", password: "", status: "" });
    };

    const handleEditCustomer = (index) => {
        const customerToEdit = customers[index];
        setNewCustomer({ ...customerToEdit, password: atob(customerToEdit.password) });
        setEditIndex(index);
        setIsPopupOpen(true);
    };

    const handleDeleteCustomer = (index) => {
        const updatedCustomers = customers.filter((_, i) => i !== index);
        setCustomers(updatedCustomers);
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

    const toggleCustomerListVisibility = () => {
        setIsCustomerListVisible(!isCustomerListVisible);
    };

    return (
        <div className="flex flex-col sm:flex-row h-screen bg-[#F6F4F2]">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Main Content */}
            <main className="flex-1 p-2">
                {/* Header */}
                <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2">
                    <div className="mb-1 lg:mb-0">
                        <h1 className="text-lg font-bold text-[#8D5A5A]">Customer Management</h1>
                        <p className="text-s text-[#C5AFAF]">Manage our customer profiles and statuses</p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-1 lg:space-y-0 lg:space-x-1 ml-auto">
                        <input
                            type="text"
                            placeholder="Search customers"
                            className="px-2 py-2 rounded-3xl border border-[#E8D5CF] bg-[#FFF9F6] text-[#8D5A5A] text-s items-baseline text-right"
                        />
                        <div className="flex items-center ml-auto">
                            <PersonIcon className="text-[#8D5A5A] mr-1 text-s" />
                            <span className="text-s text-[#8D5A5A]">Admin</span>
                        </div>
                    </div>
                </header>

                {/* Customer Stats */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-2 bg-white rounded-3xl shadow-md border border-[#E8D5CF]">
                        <h3 className="text-xs text-[#C5AFAF]">Total Customers</h3>
                        <p className="text-md font-bold text-[#8D5A5A]">{customers.length}</p>
                    </div>
                </section>

                {/* Add and Toggle Buttons */}
                <div className="flex justify-between mb-4">
                    <button
                        onClick={openPopup}
                        className="px-4 py-2 bg-[#8D5A5A] text-white rounded-3xl shadow-md"
                    >
                        Add Customer
                    </button>
                    <button
                        onClick={toggleCustomerListVisibility}
                        className="px-4 py-2 bg-[#8D5A5A] text-white rounded-3xl shadow-md"
                    >
                        {isCustomerListVisible ? "Hide Customer List" : "Show Customer List"}
                    </button>
                </div>

                {isCustomerListVisible && (
                    <section className="mb-4">
                        <div className="p-4 bg-white rounded-lg shadow-md border border-[#E8D5CF]">
                            <h3 className="mb-2 text-[#8D5A5A] font-bold">Customer List</h3>
                            <table className="w-full text-left text-[#8D5A5A] text-sm">
                                <thead>
                                    <tr>
                                        <th className="border-b border-[#E8D5CF] pb-2">Name</th>
                                        <th className="border-b border-[#E8D5CF] pb-2">Email</th>
                                        <th className="border-b border-[#E8D5CF] pb-2">Password</th>
                                        <th className="border-b border-[#E8D5CF] pb-2">Status</th>
                                        <th className="border-b border-[#E8D5CF] pb-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map((customer, index) => (
                                        <tr key={index}>
                                            <td className="py-2">{customer.name}</td>
                                            <td className="py-2">{customer.email}</td>
                                            <td className="py-2">{"********"}</td> {/* Hide password */}
                                            <td className="py-2">{customer.status}</td>
                                            <td className="py-2">
                                                <button
                                                    onClick={() => handleDeleteCustomer(index)}
                                                    className="px-2 py-1 bg-[#8D5A5A] text-white rounded-3xl mr-2"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    onClick={() => handleEditCustomer(index)}
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

                {/* Add Customer Popup */}
                {isPopupOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
                            <h3 className="mb-4 text-[#8D5A5A] font-bold">Add New Customer</h3>
                            <div className="mb-2">
                                <label className="block text-sm text-[#8D5A5A]">Name</label>
                                <input
                                    type="text"
                                    value={newCustomer.name}
                                    onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                                    className="w-full px-2 py-1 border border-[#E8D5CF] rounded-lg"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm text-[#8D5A5A]">Email</label>
                                <input
                                    type="email"
                                    value={newCustomer.email}
                                    onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                                    className="w-full px-2 py-1 border border-[#E8D5CF] rounded-lg"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm text-[#8D5A5A]">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={newCustomer.password}
                                        onChange={(e) => setNewCustomer({ ...newCustomer, password: e.target.value })}
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
                            <div className="mb-4">
                                <label className="block text-sm text-[#8D5A5A]">Status</label>
                                <select
                                    value={newCustomer.status}
                                    onChange={(e) => setNewCustomer({ ...newCustomer, status: e.target.value })}
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
                                    onClick={handleAddCustomer}
                                    className="px-4 py-2 bg-[#8D5A5A] text-white rounded-lg"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Customers;
