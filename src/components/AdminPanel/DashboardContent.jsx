// eslint-disable-next-line no-unused-vars
import React from 'react';

const DashboardContent = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg p-4">Card 1</div>
                <div className="bg-white shadow rounded-lg p-4">Card 2</div>
                <div className="bg-white shadow rounded-lg p-4">Card 3</div>
            </div>
        </div>
    );
};

export default DashboardContent;
