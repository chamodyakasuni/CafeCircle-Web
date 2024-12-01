// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

const SalesAnalytics = () => {
    // Sample data
    const salesData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Daily Sales ($)',
                data: [100, 150, 200, 180, 220, 300, 250],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const salesTrendsData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Weekly Revenue ($)',
                data: [1200, 1500, 1700, 1600],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
                tension: 0.3, // Smooth curve
            },
        ],
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Sales Analytics</h2>

            {/* Bar Chart */}
            <div className="bg-white shadow rounded-lg p-4 mb-6">
                <h3 className="text-lg font-bold mb-2">Daily Sales</h3>
                <Bar data={salesData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
            </div>

            {/* Line Chart */}
            <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-bold mb-2">Weekly Revenue Trend</h3>
                <Line data={salesTrendsData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
            </div>
        </div>
    );
};

export default SalesAnalytics;
