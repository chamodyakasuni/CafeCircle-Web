// eslint-disable-next-line no-unused-vars
import React from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import PersonIcon from '@mui/icons-material/Person';

import cappuccinoImg from '../../assets/coffee/capaccino.png';
import latteImg from '../../assets/coffee/cafe-latte.png'
import mochaImg from '../../assets/coffee/macchiato.png'
import americanoImg from '../../assets/coffee/americano (2).png'
import espressoImg from '../../assets/coffee/espresso2.png'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [120, 190, 300, 250, 400, 320],
      borderColor: '#E08D66',
      backgroundColor: 'rgba(224, 141, 102, 0.2)',
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
  },
};


const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen bg-[#F6F4F2]">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Main Content */}
      <main className="flex-1 p-2">
        {/* Header */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2">
          <div className="mb-1 lg:mb-0">
            <h1 className="text-lg font-bold text-[#8D5A5A]">Welcome to CafeCircle</h1>
            <p className="text-s text-[#C5AFAF]">Choose the Category</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-1 lg:space-y-0 lg:space-x-1 ml-auto">
            <input
              type="text"
              placeholder="Search something"
              className="px-2 py-2 rounded-3xl border border-[#E8D5CF] bg-[#FFF9F6] text-[#8D5A5A] text-s items-baseline text-right"
            />
            <div className="flex items-center ml-auto">
              <PersonIcon className="text-[#8D5A5A] mr-1 text-s" />
              <span className="text-s text-[#8D5A5A]">Admin</span>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div className="p-2 bg-white rounded-3xl shadow-md border border-[#E8D5CF]">
            <h3 className="text-xs text-[#C5AFAF]">Total Orders</h3>
            <p className="text-md font-bold text-[#8D5A5A]">21,375</p>
          </div>
          <div className="p-2 bg-white rounded-3xl shadow-md border border-[#E8D5CF]">
            <h3 className="text-xs text-[#C5AFAF]">New Customers</h3>
            <p className="text-md font-bold text-[#8D5A5A]">1,012</p>
          </div>
          <div className="p-2 bg-white rounded-3xl shadow-md border border-[#E8D5CF]">
            <h3 className="text-xs text-[#C5AFAF]">Total Sales</h3>
            <p className="text-md font-bold text-[#8D5A5A]">$24,254</p>
          </div>
        </section>

        {/* Sales Analytics and Trending Coffee */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="p-2 bg-white rounded-3xl shadow-md border border-[#E8D5CF]" style={{ width: '100%', height: '400px' }}>
            <h3 className="mb-2 text-[#8D5A5A] font-bold">Sales Analytics</h3>
            <Line data={data} options={options} />
          </div>

          <div className="p-4 bg-white rounded-3xl shadow-md border border-[#E8D5CF]">
            <h3 className="mb-4 text-[#8D5A5A] font-bold">Trending Coffee</h3>
            <ul className="space-y-2 text-[#8D5A5A] text-sm ">
              <li className="flex justify-between items-center">
                <span>
                  <img src={cappuccinoImg} alt="Cappuccino" className="w-10 h-10 inline mr-1" />
                   Cappuccino
                </span>
                <span>320</span>
              </li>
              <li className="flex justify-between items-center">
                <span>
                  <img src={latteImg} alt="Latte" className="w-10 h-10 inline mr-1" />
                   Latte
                </span>
                <span>280</span>
              </li>
              <li className="flex justify-between items-center">
                <span>
                  <img src={mochaImg} alt="Mocha" className="w-10 h-10 inline mr-1" />
                   Mocha
                </span>
                <span>240</span>
              </li>
              <li className="flex justify-between items-center">
                <span>
                  <img src={espressoImg} alt="Mocha" className="w-10 h-10 inline mr-1" />
                   Espresso
                </span>
                <span>240</span>
              </li>
              <li className="flex justify-between items-center">
                <span>
                  <img src={americanoImg} alt="Mocha" className="w-10 h-10 inline mr-1" />
                  Americano
                </span>
                <span>240</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Recent Orders */}
        <section className="mb-4">
          <div className="p-4 bg-white rounded-lg shadow-md border border-[#E8D5CF]">
            <h3 className="mb-2 text-[#8D5A5A] font-bold">Recent Orders</h3>
            <table className="w-full text-left text-[#8D5A5A] text-sm">
              <thead>
                <tr>
                  <th className="border-b border-[#E8D5CF] pb-2">Coffee</th>
                  <th className="border-b border-[#E8D5CF] pb-2">Date</th>
                  <th className="border-b border-[#E8D5CF] pb-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Cappuccino</td>
                  <td className="py-2">12/23/2024</td>
                  <td className="py-2">$5</td>
                </tr>
                <tr>
                  <td className="py-2">Latte</td>
                  <td className="py-2">12/22/2024</td>
                  <td className="py-2">$4.50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;