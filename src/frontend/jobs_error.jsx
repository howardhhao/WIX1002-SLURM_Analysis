/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

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
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#0a5d0f" />
      </LineChart>
    </ResponsiveContainer>
  );
};


function Dashboard() {
  const [data, setData] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [highestJobs, setHighestJobs] = useState({ month: '', value: 0 });
  const [lowestJobs, setLowestJobs] = useState({ month: '', value: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/results.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const parsedData = results.data
              .map(row => ({
                month: row.Month,
                value: parseInt(row.Error, 10)
              }))
              .filter(row => !isNaN(row.value));
            
            setData(parsedData);

            const total = parsedData.reduce((sum, entry) => sum + entry.value, 0);
            setTotalJobs(total);

            const highest = parsedData.reduce((prev, current) => (prev.value > current.value) ? prev : current, {});
            setHighestJobs(highest);

            const lowest = parsedData.reduce((prev, current) => (prev.value < current.value) ? prev : current, {});
            setLowestJobs(lowest);
          }
        });
      })
      .catch(error => {
        console.error("Error loading CSV file:", error);
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
          <p className='total-amount-card-title'>Total Jobs Error</p>
        </div>

        <div className='total-amount-card'>
          <p className='total-amount-card-value'>{highestJobs.value}</p>
          <p className='total-amount-card-title'>Highest Jobs Error (<strong>{highestJobs.month}</strong>)</p>
        </div>

        <div className='total-amount-card'>
          <p className='total-amount-card-value'>{lowestJobs.value}</p>
          <p className='total-amount-card-title'>Lowest Jobs Error (<strong>{lowestJobs.month}</strong>)</p>
        </div>

        </div>


        <div className='jobSError-card'>
        <LineChartComponent data={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
