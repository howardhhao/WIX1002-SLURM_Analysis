/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Sidebar from '../components/sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import TopNavBar from '../components/topNavBar';
import 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\frontendCss.css'; 
import image from 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\analytics.png';

const LineChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="GPU" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="NumberofJobs" stroke="#832f15" />
      </LineChart>
    </ResponsiveContainer>
  );
};

function Dashboard() {
  const [data, setData] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [highestJobs, setHighestJobs] = useState({ GPU: '', NumberofJobs: 0 });
  const [lowestJobs, setLowestJobs] = useState({ GPU: '', NumberofJobs: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/gpu.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const parsedData = results.data
              .map(row => ({
                GPU: row.GPU,
                NumberofJobs: parseInt(row['Number of Jobs'], 10)
              }))
              .filter(row => !isNaN(row.NumberofJobs));
            
            setData(parsedData);

            const total = parsedData.reduce((sum, entry) => sum + entry.NumberofJobs, 0);
            setTotalJobs(total);

            const highest = parsedData.reduce((prev, current) => (prev.NumberofJobs > current.NumberofJobs) ? prev : current, {});
            setHighestJobs(highest);

            const lowest = parsedData.reduce((prev, current) => (prev.NumberofJobs < current.NumberofJobs) ? prev : current, {});
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
      <div className='content'> <TopNavBar/>
        <p className='content-title'>Overview</p>
        <div className='small-card-container'>
          <div className='total-amount-card'>
            <p className='total-amount-card-value'>{totalJobs}</p>
            <p className='total-amount-card-title'>Total Jobs Allocated (GPU)</p>
          </div>
          <div className='total-amount-card'>
            <p className='total-amount-card-value'>{highestJobs.NumberofJobs}</p>
            <p className='total-amount-card-title'>Highest Jobs Allocated to GPU (<strong>{highestJobs.GPU}</strong>)</p>
          </div>
          <div className='total-amount-card'>
            <p className='total-amount-card-value'>{lowestJobs.NumberofJobs}</p>
            <p className='total-amount-card-title'>Lowest Jobs Allocated to GPU (<strong>{lowestJobs.GPU}</strong>)</p>
          </div>
        </div>
        <p className='content-title-2'>Breakdown Analysis</p>
        <div className='jobAllocated-card'>
          <LineChartComponent data={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
