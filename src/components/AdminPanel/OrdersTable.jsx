// eslint-disable-next-line no-unused-vars
import React from 'react';

const OrdersTable = () => {
    const orders = [
        { id: 1, customer: 'John Doe', item: 'Latte', total: '$5.50', status: 'Completed' },
        { id: 2, customer: 'Jane Smith', item: 'Cappuccino', total: '$4.00', status: 'Pending' },
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Customer</th>
                        <th className="border p-2">Item</th>
                        <th className="border p-2">Total</th>
                        <th className="border p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td className="border p-2 text-center">{order.id}</td>
                            <td className="border p-2">{order.customer}</td>
                            <td className="border p-2">{order.item}</td>
                            <td className="border p-2 text-center">{order.total}</td>
                            <td className="border p-2 text-center">{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;
