// src/pages/Dashboard.tsx

import React, { useEffect } from 'react';

const Dashboard: React.FC = () => {
    useEffect(() => {
        localStorage.removeItem('authToken')
    }, []);
  return <div>Dashboard Page - Protected Route</div>;
};

export default Dashboard;
