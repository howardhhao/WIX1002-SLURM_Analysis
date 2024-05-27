import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Sidebar from '../components/sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

import 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\frontendCss.css'; 
import image from 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\analytics.png';

const LineChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={[data]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="A" stroke="#0a5d0f" name="A" />
        <Line type="monotone" dataKey="B" stroke="#6a1b9a" name="B" />
        <Line type="monotone" dataKey="C" stroke="#e65100" name="C" />
        <Line type="monotone" dataKey="D" stroke="#4a148c" name="D" />
      </LineChart>
    </ResponsiveContainer>
  );
};

function Dashboard() {
  const [executiveData, setExecutiveData] = useState(null);
  const [totalJobs, setTotalJobs] = useState(0);
  const [highestJobs, setHighestJobs] = useState({ value: 0, month: '' });
  const [lowestJobs, setLowestJobs] = useState({ value: Infinity, month: '' });
  const navigate = useNavigate();

  useEffect(() => {
    Papa.parse('ETD.csv', {
      download: true,
      header: true,
      complete: (results) => {
        const data = results.data[0];
        const total = parseFloat(data.AverageExecutionTime);

        const values = {
          A: parseFloat(data.A),
          B: parseFloat(data.B),
          C: parseFloat(data.C),
          D: parseFloat(data.D),
        };

        const highestValue = Math.max(values.A, values.B, values.C, values.D);
        const lowestValue = Math.min(values.A, values.B, values.C, values.D);

        const highestMonth = Object.keys(values).find(key => values[key] === highestValue);
        const lowestMonth = Object.keys(values).find(key => values[key] === lowestValue);

        setExecutiveData({
          name: 'Execution Data',
          ...values,
        });

        setTotalJobs(total);
        setHighestJobs({ value: highestValue, month: highestMonth });
        setLowestJobs({ value: lowestValue, month: lowestMonth });
      }
    });
  }, []);

  const handleLogOut = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className='dashboard-container'>
      <Sidebar image={image} handleLogOut={handleLogOut} />
      <div className='content'>
        <p className='content-title'>Overview</p>
        <div className='small-card-container'>
          <div className='total-amount-card'>
            <p className='total-amount-card-value'>{totalJobs}</p>
            <p className='total-amount-card-title'>Average Execution Time (ms)</p>
          </div>
          <div className='total-amount-card'>
            <p className='total-amount-card-value'>{highestJobs.value}</p>
            <p className='total-amount-card-title'>Highest Time Taken (<strong>{highestJobs.month}</strong>)</p>
          </div>
          <div className='total-amount-card'>
            <p className='total-amount-card-value'>{lowestJobs.value}</p>
            <p className='total-amount-card-title'>Shortest Time Taken (<strong>{lowestJobs.month}</strong>)</p>
          </div>
        </div>
        <div className='jobTLE-card'>
          {executiveData && <LineChartComponent data={executiveData} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
