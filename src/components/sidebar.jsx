/* eslint-disable jsx-a11y/anchor-is-valid */

import React , { useState }from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
import 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\frontendCss.css';
import image from 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\analytics.png';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = (event) => {
    event.preventDefault();
    navigate('/');
  };
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (index, href) => {
    setClickedItem(index);
    navigate(href);
  };
  

  

  return (
    <nav className='sidebar'>
      <p className='side-nav-bar-title'>
        <img className='logo-SLURM' src={image} alt="SLURM Analysis Logo" /> SLURM Analysis
      </p>
     
      <ul>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsSubmitted' ? 'clicked' : ''} onClick={() => handleClick(0, '/JobsSubmitted')}>Jobs Submitted</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsAllocated' ? 'clicked' : ''} onClick={() => handleClick(1, '/JobsAllocated')}>Jobs Allocated</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsCompleted' ? 'clicked' : ''} onClick={() => handleClick(2, '/JobsCompleted')}>Jobs Completed</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsKilled' ? 'clicked' : ''} onClick={() => handleClick(3, '/JobsKilled')}>Jobs Killed</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsTLE' ? 'clicked' : ''} onClick={() => handleClick(4, '/JobsTLE')}>Jobs TLE</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsError' ? 'clicked' : ''} onClick={() => handleClick(5, '/JobsError')}>Jobs Error</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsErrorUser' ? 'clicked' : ''} onClick={() => handleClick(6, '/JobsErrorUser')}>Jobs Error (Users)</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsByPartitions' ? 'clicked' : ''} onClick={() => handleClick(7, '/JobsByPartitions')}>Jobs By Partitions</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsCpu' ? 'clicked' : ''} onClick={() => handleClick(8, '/JobsCpu')}>Jobs Allocated (CPU)</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsGpu' ? 'clicked' : ''} onClick={() => handleClick(9, '/JobsGpu')}>Jobs Allocated (GPU)</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsAvgTime' ? 'clicked' : ''} onClick={() => handleClick(10, '/JobsAvgTime')}>Jobs Avg Execution Time</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsAvgSubmitTIme' ? 'clicked' : ''} onClick={() => handleClick(11, '/JobsAvgSubmitTIme')}>Jobs Avg Submit Time (Usec)</li>
        <li style={{cursor: 'pointer'}} className={location.pathname === '/JobsExit0' ? 'clicked' : ''} onClick={() => handleClick(12, '/JobsExit0')}>Jobs Completed (Exit status 0)</li>

      <button className='dashboard-log-out-button' onClick={handleLogOut}>Sign Out</button>  
      </ul> 
    </nav>
  );
}


export default Sidebar;


