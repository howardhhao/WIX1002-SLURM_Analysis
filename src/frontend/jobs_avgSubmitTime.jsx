/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import Sidebar from '../components/sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

import 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\frontendCss.css'; 
import image from 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\analytics.png';

const data = [
    { month: 'June', value: 602 },
    { month: 'July', value: 335 },
    { month: 'August', value: 417 },
    { month: 'September', value: 232 },
    { month: 'October', value: 308 },
    { month: 'November', value: 312 },
    { month: 'December', value: 218 },
  ];
  
  const LineChartComponent = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#832f15" />
        </LineChart>
      </ResponsiveContainer>
    );
  };

function Dashboard() {
  const navigate = useNavigate();

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
          <p className='total-amount-card-value'>5622</p>
          <p className='total-amount-card-title'>Total Jobs Average Submit Time</p>
        </div>

        <div className='total-amount-card'>
          <p className='total-amount-card-value'>602</p>
          <p className='total-amount-card-title'>Highest Jobs Average Submit Time (Month)</p>
        </div>

        <div className='total-amount-card'>
          <p className='total-amount-card-value'>232</p>
          <p className='total-amount-card-title'>Lowest Jobs Average Submit Time (Month)</p>
        </div>

        </div>


        <div className='jobTLE-card'>
        <LineChartComponent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
