import React, { useState } from 'react';
import StatsCard from '../../components/StatsCard/StatsCard';
import DataTable from '../../components/DataTable/DataTable';
import Sidebar from '../../components/Sidebar/Sidebar'; // Import the Sidebar component
import styles from './UsersDashboard.module.scss';
import Navbar from '../../components/Topbar/Topbar';

const UsersDashboard: React.FC = () => {
  // Define the sidebar items

  // State to manage the active path
  const [activePath, setActivePath] = useState('/users');

  // Function to handle navigation when a sidebar item is clicked
  const handleNavigate = (path: string) => {
    setActivePath(path);
    // You can add logic for routing/navigation here if necessary
  };

  // Handle search query (just logging for now)
  const handleSearch = (query: string) => {
    console.log(query); // You can replace this with actual search functionality
  };

  // Profile image for the Navbar (use a placeholder or user image URL)
  const profileImage = 'https://via.placeholder.com/150'; // Replace with actual image URL

  const stats = [
    { title: 'Users', value: '223,453', icon: '👤', color: '#496F76' },
    { title: 'Active Users', value: '2,453', icon: '🟢', color: '#34A853' },
    { title: 'Users with Loans', value: '12,453', icon: '💰', color: '#FBBC05' },
    { title: 'Users with Savings', value: '102,453', icon: '💵', color: '#4285F4' },
  ];

  const headers = ['Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status'];
  const data = [
    { organization: 'Lendsqr', username: 'Adedeji', email: 'adedeji@lendsqr.com', phoneNumber: '08078093721', dateJoined: 'May 15, 2020', status: 'Inactive' },
    { organization: 'Iron', username: 'Debby Ogana', email: 'debby2@iron.com', phoneNumber: '08160780928', dateJoined: 'Apr 30, 2020', status: 'Pending' },
    // Add more data here...
  ];

  return (
    <div className={styles.dashboardWrapper}>
      {/* Navbar at the top */}
      <Navbar profileImage={profileImage} onSearch={handleSearch} />

      <div className={styles.mainContentWrapper}>
        {/* Sidebar on the left */}
        <Sidebar activePath={activePath} onNavigate={handleNavigate} />

        {/* Main content on the right */}
        <div className={styles.dashboardContent}>
          <div className={styles.header}>
            <h1>Users</h1>
          </div>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          <DataTable headers={headers} data={data} />
        </div>
      </div>
    </div>
  );
};

export default UsersDashboard;
