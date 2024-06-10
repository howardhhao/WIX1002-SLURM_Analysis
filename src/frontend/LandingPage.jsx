import { useNavigate } from 'react-router-dom';
import 'C:\\Users\\User\\Desktop\\y1s1_dashboard\\my-app\\src\\frontend\\frontendCss.css'; 
import Footer from '../components/Footer';


function LandingPage() {
  
  const navigate = useNavigate();

  

  const handleGetStarted = (event) => {
    event.preventDefault();
    navigate('/JobsSubmitted');
  };

  return (
    <><div>
          <p className='content-title-landing-page'>Welcome to SLURM Analysis</p>
          <div className='button-get-started-container'>
              <button onClick={handleGetStarted} className='button-get-started'>Get Started</button>
          </div>

      </div><Footer /></>
   
    
  );
}

export default LandingPage;
