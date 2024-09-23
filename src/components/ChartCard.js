import 'D:/PROJECT/dashboard/src/index.css';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function ChartCard({ title, subtitle }) {
  const data = [
    { name: 'January', value: 4000 },
    { name: 'February', value: 3000 },
    { name: 'March', value: 2000 },
    { name: 'April', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'June', value: 2390 },
    { name: 'July', value: 3490 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow h-full">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <div className="mt-4 h-40 flex items-center justify-center">
        <BarChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}
