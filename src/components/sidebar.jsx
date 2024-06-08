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

  const handleToCode = (event) => {
    event.preventDefault();
    window.location.href = '';
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
        <img onClick={handleToCode} className='tocode' src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"%3E%3Cpath fill="%23000" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.512-5.554a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68c0 .644-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77c0-.184-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77c0 .184.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68c0-.644.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" clip-rule="evenodd"/%3E%3C/svg%3E'/>
      </ul>
    </nav>
  );
}

export default Sidebar;
