// eslint-disable-next-line no-unused-vars
import React from 'react';

const Header = () => {
    return (
        <div className="h-16 bg-brown-100 shadow flex items-center px-6 justify-between">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-md px-3 py-1"
                />
                <button className="ml-4 bg-brown-500 text-white px-4 py-1 rounded-md">
                    Profile
                </button>
            </div>
        </div>
    );
};

export default Header;

