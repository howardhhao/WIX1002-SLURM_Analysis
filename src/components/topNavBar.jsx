import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faCode , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function TopNavBar() {
    const navigate = useNavigate();

    const handleLogOut = (event) => {
        event.preventDefault();
        navigate('/');
      };
    
      const handleClickCode = (event) => {
        event.preventDefault();
        window.location.href = 'https://github.com/howardhhao/SLURM_Analysis_Implementation';
      };

  

  return (

    <div className='horizontal-nav-bar'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input className='horizontal-nav-bar-search-box' type="text" placeholder="Search something" />
            <FontAwesomeIcon icon={faSearch} className="search-icon" style={{ marginLeft: '7px', cursor: 'pointer' }} />
            <div className='icon-container-box' style={{ marginLeft: '100vh', display: 'flex', gap: '1rem' }}>
                <FontAwesomeIcon onClick={handleClickCode} icon={faCode} className="code-icon" style={{ cursor: 'pointer' }} />
                <FontAwesomeIcon onClick={handleLogOut} icon={faSignOutAlt} className="sign-out-icon" style={{ cursor: 'pointer' }} />
            </div>
        </div>      
    </div>
    
  );
}

export default TopNavBar;
