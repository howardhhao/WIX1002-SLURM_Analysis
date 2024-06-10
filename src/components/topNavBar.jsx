import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCode, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function TopNavBar(  ) {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleLogOut = (event) => {
        event.preventDefault();
        navigate('/');
    };

    const handleClickCode = (event) => {
        event.preventDefault();
        window.location.href = 'https://github.com/howardhhao/SLURM_Analysis_Implementation';
    };

    const handleClick = (index, path) => {
      console.log(`Clicked on ${path}`);
      navigate(path);

  };

    const menuItems = [
        { path: '/JobsSubmitted', label: 'Jobs Submitted' },
        { path: '/JobsAllocated', label: 'Jobs Allocated' },
        { path: '/JobsCompleted', label: 'Jobs Completed' },
        { path: '/JobsKilled', label: 'Jobs Killed' },
        { path: '/JobsTLE', label: 'Jobs TLE' },
        { path: '/JobsError', label: 'Jobs Error' },
        { path: '/JobsErrorUser', label: 'Jobs Error (Users)' },
        { path: '/JobsByPartitions', label: 'Jobs By Partitions' },
        { path: '/JobsCpu', label: 'Jobs Allocated (CPU)' },
        { path: '/JobsGpu', label: 'Jobs Allocated (GPU)' },
        { path: '/JobsAvgTime', label: 'Jobs Avg Execution Time' },
        { path: '/JobsAvgSubmitTIme', label: 'Jobs Avg Submit Time (Usec)' },
        { path: '/JobsExit0', label: 'Jobs Completed (Exit status 0)' },
    ];

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setDropdownVisible(value.length > 0);
    };

    const filteredItems = menuItems.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    

    return (
        <div className='horizontal-nav-bar'>
            <style>
                {`
                /* CSS for Dropdown Menu */
                .dropdown-menu {
                    position: absolute;
                    background-color: white;
                    border: 1px solid #ccc;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    max-height: 200px;
                    overflow-y: auto;
                    z-index: 1000;
                    border-radius: 10px; 
                    margin-top: 20vh; 
                }

                .dropdown-menu li {
                    padding: 10px;
                }

                .dropdown-menu li.clicked {
                    background-color: #e0e0e0;
                }

                .dropdown-menu li:hover {
                    background-color: #f0f0f0;
                }
                `}
            </style>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    className='horizontal-nav-bar-search-box'
                    type="text"
                    placeholder="Search something"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                {dropdownVisible && (
                    <ul className="dropdown-menu">
                        {filteredItems.map((item, index) => (
                            <li
                                key={item.path}
                                style={{ cursor: 'pointer' }}
                                className={location.pathname === item.path ? 'clicked' : ''}
                                onClick={() => handleClick(index, item.path)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                )}
                <div className='icon-container-box' style={{ marginLeft: '100vh', display: 'flex', gap: '1rem' }}>
                    <FontAwesomeIcon onClick={handleClickCode} icon={faCode} className="code-icon" style={{ cursor: 'pointer' }} />
                    <FontAwesomeIcon onClick={handleLogOut} icon={faSignOutAlt} className="sign-out-icon" style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    );
}

export default TopNavBar;
