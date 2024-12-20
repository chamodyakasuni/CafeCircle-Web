// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Dashboard from '../Dashboard/Dashboard';

const AdminPanel = () => {
    return (
        <>
            <div className='w-full flex'>
                <NavigationBar />
            
            <main className='flex grow'>
                <Dashboard />
            </main>
            </div>
        </>
    );
};
export default AdminPanel