/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\frontendCss.css';
import image from 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\analytics.png';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <nav className='sidebar'>
      <p className='side-nav-bar-title'>
        <img className='logo-SLURM' src={image} alt="SLURM Analysis Logo" /> SLURM Analysis
      </p>
      <ul>
        <li><a href='/JobsSubmitted'>Jobs Submitted</a></li>
        <li><a href='/JobsAllocated'>Jobs Allocated</a></li>
        <li><a href='/JobsCompleted'>Jobs Completed</a></li>
        <li><a href='/JobsKilled'>Jobs Killed</a></li>
        <li><a href='/JobsTLE'>Jobs TLE</a></li>
        <li><a href='/JobsError'>Jobs Error</a></li>
        <li><a href='/JobsErrorUser'>Jobs Error (Users)</a></li>
        <li><a href='/JobsByPartitions'>Jobs By Partitions</a></li>
        <li><a href='/JobsCpu'>Jobs Allocated (CPU)</a></li>
        <li><a href='/JobsGpu'>Jobs Allocated (GPU)</a></li>
        <li><a href='/JobsAvgTime'>Jobs Avg Execution Time</a></li>
        <li><a href='/JobsAvgSubmitTIme'>Jobs Avg Submit Time (Usec) </a></li>
        <li><a href='/JobsExit0'>Jobs Completed (Exit status 0)</a></li>
        <button className='dashboard-log-out-button' onClick={handleLogOut}>Sign Out</button>
      </ul>
    </nav>
  );
}

export default Sidebar;
