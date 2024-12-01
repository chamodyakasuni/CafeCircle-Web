// eslint-disable-next-line no-unused-vars
import React from 'react';

const Sidebar = () => {
    const navLinks = ['Dashboard', 'Orders', 'Menu', 'Inventory', 'Analytics'];
    return (
        <div className="w-64 h-screen bg-brown-800 text-gray flex flex-col">
            <h2 className="text-2xl font-bold text-center py-4">CoffeeShop Admin</h2>
            <ul className="mt-4 space-y-2">
                {navLinks.map((link, index) => (
                    <li
                        key={index}
                        className="px-4 py-2 hover:bg-brown-700 cursor-pointer"
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

