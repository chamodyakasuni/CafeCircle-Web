// eslint-disable-next-line no-unused-vars
import React from "react";

const ordersData = [
    { id: "#001", customer: "John Doe", coffee: "Cappuccino", date: "12/23/2024", quantity: 2, total: "$10" },
    { id: "#002", customer: "Jane Smith", coffee: "Latte", date: "12/22/2024", quantity: 1, total: "$4.50" },
    { id: "#003", customer: "Mark Wilson", coffee: "Espresso", date: "12/21/2024", quantity: 3, total: "$9" },
    { id: "#004", customer: "Emily Davis", coffee: "Mocha", date: "12/20/2024", quantity: 2, total: "$8" },
];

const Orders = () => {
    return (
        <div className="flex flex-col sm:flex-row h-screen bg-lightwhite2">
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Main Content */}
            <main className="flex-1 p-4">
                {/* Header */}
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-bold text-lightBrown">Orders</h1>
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="px-2 py-2 rounded-3xl border border-lightBrown2 bg-lighterWhite text-lightBrown text-sm"
                    />
                </header>

                {/* Orders Table */}
                <section className="bg-white p-4 rounded-3xl shadow-md border border-lightBrown2">
                    <h2 className="text-lightBrown font-bold mb-4">Order Details</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-lightBrown">
                            <thead>
                                <tr>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Order ID</th>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Customer Name</th>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Coffee</th>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Date</th>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Quantity</th>
                                    <th className="border-b border-lightBrown2 pb-2 px-4">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordersData.map((order) => (
                                    <tr key={order.id} className="hover:bg-lightwhite2">
                                        <td className="py-2 px-4">{order.id}</td>
                                        <td className="py-2 px-4">{order.customer}</td>
                                        <td className="py-2 px-4">{order.coffee}</td>
                                        <td className="py-2 px-4">{order.date}</td>
                                        <td className="py-2 px-4">{order.quantity}</td>
                                        <td className="py-2 px-4">{order.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Orders;
