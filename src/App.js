import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './frontend/signin';
import LandingPage from './frontend/LandingPage';
import JobsSubmitted from './frontend/jobs_submitted';
import JobsAllocated from './frontend/jobs_allocated';
import JobsCompleted from './frontend/jobs_completed';
import JobsKilled from './frontend/jobs_killed';
import JobsTLE from './frontend/jobs_tle';
import JobsError from './frontend/jobs_error';
import JobsErrorUser from './frontend/jobs_errorUser';
import JobsByPartitions from './frontend/jobs_partition';
import JobsCpu from './frontend/jobs_cpu';
import JobsGpu from './frontend/jobs_gpu';
import JobsAvgTime from './frontend/jobs_avgTime';
import JobsAvgSubmitTIme from './frontend/jobs_avgSubmitTime';
import JobsExit0 from './frontend/jobs_exit0';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/LandingPage" element={<LandingPage />} />
        <Route path="/JobsSubmitted" element={<JobsSubmitted />} />
        <Route path="/JobsAllocated" element={<JobsAllocated />} />
        <Route path="/JobsCompleted" element={<JobsCompleted />} />
        <Route path="/JobsKilled" element={<JobsKilled />} />
        <Route path="/JobsTLE" element={<JobsTLE />} />
        <Route path="/JobsError" element={<JobsError />} />
        <Route path="/JobsErrorUser" element={<JobsErrorUser />} />
        <Route path="/JobsByPartitions" element={<JobsByPartitions />} />
        <Route path="/JobsCpu" element={<JobsCpu />} />
        <Route path="/JobsGpu" element={<JobsGpu />} />
        <Route path="/JobsAvgTime" element={<JobsAvgTime />} />
        <Route path="/JobsAvgSubmitTIme" element={<JobsAvgSubmitTIme />} />
        <Route path="/JobsExit0" element={<JobsExit0 />} />
      </Routes>
    </Router>
  );
};

export default App;
