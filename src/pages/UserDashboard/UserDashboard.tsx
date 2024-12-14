import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchUsers } from '../../features/user/userSlice';
import StatsCard from '../../components/StatsCard/StatsCard';
import DataTable from '../../components/DataTable/DataTable';
import styles from './UsersDashboard.module.scss';
import Icon1 from '../../assets/icons/icon1.svg';
import Icon2 from '../../assets/icons/icon2.svg';
import Icon3 from '../../assets/icons/icon3.svg';
import Icon4 from '../../assets/icons/icon4.svg';
import Layout from '../../components/Layout/Layout';

const UsersDashboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  // Access Redux state
  const { users, loading, error } = useSelector((state: RootState) => state.user);
  const activePath = useSelector((state: RootState) => state.sidebar.activePath); // Get the active path

  // Fetch users on component mount
  useEffect(() => {
    if (activePath === '/users') {
      dispatch(fetchUsers());
    }
  }, [dispatch, activePath]);

  const stats = [
    { title: 'USERS', value: `125`, icon: <img src={Icon1} alt="" />, color: 'white' },
    { title: 'ACTIVE USERS', value: '2,453', icon: <img src={Icon2} alt="" />, color: 'white' },
    { title: 'USERS WITH LOANS', value: '12,453', icon: <img src={Icon3} alt="" />, color: 'white' },
    { title: 'USERS WITH SAVINGS', value: '102,453', icon: <img src={Icon4} alt="" />, color: 'white' },
  ];

  const headers = ['ORGANIZATION', 'USERNAME', 'EMAIL', 'PHONE NUMBER', 'DATE JOINED', 'STATUS'];
  

  return (
    <Layout>
      <div className={styles.dashboardContent}>
        <div className={styles.header}>
          <h1>{activePath === '/users' ? 'Users' : 'Settings'}</h1>
        </div>

        {activePath === '/users' && (
          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        )}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : activePath === '/users' ? (
          <div className={`${styles.tableWrapper}`}>
            <DataTable headers={headers} data={users} />
          </div>
        ) : (
          <div>Settings Content</div>
        )}
      </div>
    </Layout>
  );
};

export default UsersDashboard;
