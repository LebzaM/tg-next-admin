'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EmployeeChart: React.FC = () => {
  // Dummy data, replace it with your actual employee data
  const employeeData = [
    { department: 'IT', count: 5 },
    { department: 'HR', count: 3 },
    // Add more department data as needed
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={employeeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="department" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EmployeeChart;