import React from 'react'
import styles from './UserDetails.module.scss'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'; // Import Sidebar here
import Navbar from '../../components/Topbar/Topbar';
import Layout from '../../components/Layout/Layout';
import backarrow from '../../assets/icons/backarrow.svg'
import emptystar from '../../assets/icons/emptystar.svg'
import star from '../../assets/icons/star.svg'
import avatar from '../../assets/avatar.png'
const UserDetails = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.backarrow}>
          <Link to="/"><img src={backarrow} alt="backarrow" width={30} height={30} /></Link>
          <p className={styles.backText}>Back to Users</p>
        </div>
        <div className={styles.header}>
          <h1>User Details</h1>
          <div className={styles.action}>
            <button className={styles.blacklist}>Blacklist User</button>
            <button className={styles.activate}>Activate User</button>
          </div>
        </div>
        <div className={styles.bio}>
          <div className={styles.profile}>
            <img src={avatar} alt="" className={styles.pic} />
            <div className={styles.col}>
              <h1>Grace Effiom</h1>
              <p>LSQFf587g90</p>
            </div>
          </div>
          <div className={styles.tier}>
            <h1>User’s Tier</h1>
            <div className={styles.stars}>
              <img src={star} width={16} height={16} />
              <img src={emptystar} width={16} height={16} />
              <img src={emptystar} width={16} height={16} />
            </div>
          </div>
          <div className={styles.account}>
            <h1>₦200,000.00</h1>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
      </div>
    </Layout>
    // <div className={styles.dashboardWrapper}>
    //   <Navbar profileImage="https://via.placeholder.com/150" onSearch={(query) => console.log(query)} />
    //   <div className={styles.mainContentWrapper}>
    //   <Sidebar activePath={''}Back to Users onNavigate={(path) => console.log('Navigate to:', path)} /> {/* Pass activePath to Sidebar */}

    //   </div>

    // </div>
  )
}

export default UserDetails