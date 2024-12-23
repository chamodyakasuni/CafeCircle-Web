// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
// import Customers from '../Customers/Customers';
// import Orders from '../Orders/Orders';
// import Dashboard from '../Dashboard/Dashboard';
// import Product from '../Product/Product';
import Users from '../Users/Users';

const AdminPanel = () => {
    return (
        <>
            <div className='w-full flex'>
                <NavigationBar />
            
                <main className='grow overflow-y-auto'>
                    <Users />
                </main>
            </div>
        </>
    );
};
export default AdminPanel