// eslint-disable-next-line no-unused-vars
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import NavigationBar from "../NavigationBar/NavigationBar";

const customersData = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "+1 234 567 890", orders: 15, totalSpent: "$250" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "+1 987 654 321", orders: 10, totalSpent: "$150" },
    { id: 3, name: "Mark Wilson", email: "mark.wilson@example.com", phone: "+1 456 789 123", orders: 8, totalSpent: "$120" },
    { id: 4, name: "Emily Davis", email: "emily.davis@example.com", phone: "+1 321 654 987", orders: 12, totalSpent: "$200" },
];


const Customers = () => {
    return (
        <>
            <div className='w-full flex'>
                <NavigationBar />
        <div className="grow flex flex-col sm:flex-row h-screen bg-lightwhite2">
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Main Content */}
            <main className="flex-1 p-4">
                {/* Header */}
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-bold text-lightBrown">Registered Customers</h1>
                    <div className="flex items-center">
                        <PersonIcon className="text-lightBrown mr-2" />
                        <span className="text-sm text-lightBrown">Admin</span>
                    </div>
                </header>

                {/* Customers Table */}
                <section className="bg-white p-4 rounded-3xl shadow-md border border-lightBrown2">
                    <h2 className="text-lightBrown font-bold mb-4">Customer Details</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-lightBrown">
                            <thead>
                                <tr>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Customer ID</th>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Name</th>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Email</th>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Phone</th>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Orders</th>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Total Spent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customersData.map((customer) => (
                                    <tr key={customer.id} className="hover:bg-lightwhite2">
                                        <td className="py-2 px-4">{customer.id}</td>
                                        <td className="py-2 px-4">{customer.name}</td>
                                        <td className="py-2 px-4">{customer.email}</td>
                                        <td className="py-2 px-4">{customer.phone}</td>
                                        <td className="py-2 px-4">{customer.orders}</td>
                                        <td className="py-2 px-4">{customer.totalSpent}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
        </div>
        </>
    );
};

export default Customers;
