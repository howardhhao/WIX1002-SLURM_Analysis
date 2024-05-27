import React from 'react';
import 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\frontendCss.css'; 
import { useNavigate } from 'react-router-dom';

function SignInPage() {

  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    navigate('/JobsSubmitted');
  };

  return (
    <div className='sign-in-page-card'>
        <p className='sign-in-title'>Sign In</p>
        <p className='sign-in-description'>An overview of SLURM Analysis</p>

        <form className='sign-in-form' onSubmit={handleLogIn}>
        <input type='text' id='username' name='username' className='form-input' placeholder='Username' required />
        <input type='password' id='password' name='password' className='form-input' placeholder='Password' required />
        <button type='submit' className='form-button'>Log In</button>
      </form>

    </div>
  );
}

export default SignInPage;
