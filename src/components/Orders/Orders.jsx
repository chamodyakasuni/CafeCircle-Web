// eslint-disable-next-line no-unused-vars
import React from 'react';

const orders = [
    { id: 1, customer: 'John Doe', total: '$50.00', status: 'Pending' },
    { id: 2, customer: 'Jane Smith', total: '$75.00', status: 'Completed' },
    { id: 3, customer: 'Sam Johnson', total: '$100.00', status: 'Cancelled' },
];

const Orders = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Orders</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Order ID</th>
                        <th className="py-2 px-4 border-b">Customer</th>
                        <th className="py-2 px-4 border-b">Total</th>
                        <th className="py-2 px-4 border-b">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td className="py-2 px-4 border-b">{order.id}</td>
                            <td className="py-2 px-4 border-b">{order.customer}</td>
                            <td className="py-2 px-4 border-b">{order.total}</td>
                            <td className="py-2 px-4 border-b">{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;