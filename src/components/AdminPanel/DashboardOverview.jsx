// eslint-disable-next-line no-unused-vars
import React from 'react';

const DashboardOverview = () => {
    const stats = [
        { label: 'Total Orders', value: 123 },
        { label: 'Revenue Today', value: '$450' },
        { label: 'Low Stock', value: 3 },
    ];

    return (
        <div className="grid grid-cols-3 gap-6 p-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-4 text-center">
                    <h3 className="text-lg font-bold">{stat.label}</h3>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
            ))}
        </div>
    );
};

export default DashboardOverview;
