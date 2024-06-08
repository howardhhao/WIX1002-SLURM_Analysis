/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Sidebar from '../components/sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

import 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\frontendCss.css'; 
import image from 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\analytics.png';

function Dashboard() {
  const [userErrorData, setUserErrorData] = useState([]);
  const [totalUserErrors, setTotalUserErrors] = useState(0);
  const [highestUserErrors, setHighestUserErrors] = useState({ User: '', NumberofErrors: 0 });
  const [lowestUserErrors, setLowestUserErrors] = useState({ User: '', NumberofErrors: 0 });  
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/UserErrors.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const parsedData = results.data.map(row => ({
              User: row.User,
              NumberofErrors: parseInt(row.NumberofErrors, 10)
            }));

            setUserErrorData(parsedData);
  
            const totalErrors = parsedData.reduce((sum, entry) => sum + entry.NumberofErrors, 0);
            setTotalUserErrors(totalErrors);
  
            const highest = parsedData.reduce((prev, current) => (prev.NumberofErrors > current.NumberofErrors) ? prev : current, {});
            setHighestUserErrors(highest);
  
            const lowest = parsedData.reduce((prev, current) => (prev.NumberofErrors < current.NumberofErrors) ? prev : current, {});
            setLowestUserErrors(lowest);

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
            <p className='total-amount-card-value'>143</p>
            <p className='total-amount-card-title'>Total Jobs Error (Users)</p>
          </div>
          <div className='total-amount-card'>
            <p className='total-amount-card-value'>24</p>
            <p className='total-amount-card-title'>Highest Jobs Error by user <strong>{highestUserErrors.User}</strong></p>
          </div>
          <div className='total-amount-card'>
            <p className='total-amount-card-value'>1</p>
            <p className='total-amount-card-title'>Lowest Jobs Error by user <strong>{lowestUserErrors.User}</strong></p>
          </div>
        </div>
        <p className='content-title-2'>Breakdown Analysis</p>
        <div className='jobSubmitted-card'>
          <LineChartComponent data={userErrorData} />
        </div>
      </div>
    </div>
  );
}

const LineChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="User" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="NumberofErrors" stroke="#832f15" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Dashboard;
