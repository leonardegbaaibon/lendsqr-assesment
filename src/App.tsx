import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';
import { ROUTES } from './route';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard.tsx';
import { UserPageDetails } from './pages/UserPageDetails.tsx';

const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem('authToken') !== null;

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route 
          path={ROUTES.DASHBOARD} 
          element={<PrivateRoutes isAuthenticated={isAuthenticated} element={<Dashboard />} />} 
        />
        <Route 
          path={ROUTES.USER_DETAILS} 
          element={<PrivateRoutes isAuthenticated={isAuthenticated} element={<UserPageDetails />} />} 
        />
          <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
