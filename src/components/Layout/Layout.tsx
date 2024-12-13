import React, { ReactNode, useState } from 'react';
import styles from './Layout.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Topbar/Topbar';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [activePath, setActivePath] = useState<string>(''); // State for active path

  // Handle navigation
  const handleNavigate = (path: string) => {
    setActivePath(path);
    console.log('Navigate to:', path);
  };

  return (
    <div className={styles.layout}>
      <Navbar 
        profileImage="https://via.placeholder.com/150" 
        onSearch={(query) => console.log(query)} 
      />
      <div className={styles.wrapper}>
        <Sidebar 
          activePath={activePath} 
          onNavigate={handleNavigate} // Pass navigation handler
        />
        <div className={styles.container}>
          {/* Display content based on activePath */}
          {/* {activePath === '/users' ? (
            <div>
              <h1>Users</h1>

            </div>
          ) : activePath === '/settings' ? (
            <div>
              <h1>Settings</h1>

            </div>
          ) : ( */}
          {children}
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
