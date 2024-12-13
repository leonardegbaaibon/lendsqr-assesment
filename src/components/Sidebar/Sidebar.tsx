// Sidebar.tsx
import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import  UsersIcon  from '../../assets/icons/users.svg';
import  GuarantorsIcon  from '../../assets/icons/guarantors.svg';
import  LoansIcon  from '../../assets/icons/loans.svg';
import  DecisionModelsIcon  from '../../assets/icons/decision-models.svg';
import  SavingsIcon  from '../../assets/icons/savings.svg';
import  LoanRequestsIcon from '../../assets/icons/loan-requests.svg';
import   WhitelistIcon  from '../../assets/icons/whitelist.svg';
import  KarmaIcon  from '../../assets/icons/karma.svg';
import   OrganizationIcon  from '../../assets/icons/organization.svg';
import  LoanProductsIcon  from '../../assets/icons/loan-products.svg';
import SavingsProductsIcon  from '../../assets/icons/savings-products.svg';
import  FeesIcon  from '../../assets/icons/fees.svg';
import  TransactionsIcon  from '../../assets/icons/transactions.svg';
import  ServicesIcon  from '../../assets/icons/services.svg';
import  ServiceAccountIcon  from '../../assets/icons/service-account.svg';
import SettlementsIcon from '../../assets/icons/settlements.svg';
import ReportsIcon from '../../assets/icons/reports.svg';
import FeesPricingIcon  from '../../assets/icons/fees-pricing.svg';
import  AuditLogsIcon  from '../../assets/icons/audit-logs.svg';
import  Home  from '../../assets/icons/home1.svg';

interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  activePath: string;
  onNavigate: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePath, onNavigate }) => {
  const [isOrgOpen, setOrgOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOrgToggle = () => setOrgOpen(!isOrgOpen);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const renderMenuItems = (items: SidebarItem[]) =>
    items.map((item) => (
      <li
        key={item.path}
        className={`${styles.menuItem} ${activePath === item.path ? styles.active : ''}`}
        onClick={() => onNavigate(item.path)}
      >
        <span className={styles.icon}>{item.icon}</span>
        <span className={styles.label}>{item.label}</span>
      </li>
    ));

  return (
    <>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        ☰
      </div>
      <nav
        className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}
        aria-label="Main navigation"
      >
        {/* <div className={styles.logo}>Logo</div> */}

        {/* Switch Organization Dropdown */}
        {/* <div className={styles.switchOrg} onClick={handleOrgToggle}>
          <span>Switch Organization</span>
          <div className={styles.dropdownIcon}>{isOrgOpen ? '▲' : '▼'}</div>
          {isOrgOpen && (
            <div className={styles.dropdownMenu}>
              <span>Organization 1</span>
              <span>Organization 2</span>
            </div>
          )}
        </div> */}

      <ul className={styles.menu}>
        {/* Dashboard */}
        {renderMenuItems([
          { label: 'Dashboard', icon: <img src={Home} alt="" />, path: '/dashboard' },
        ])}

        {/* Customers Section */}
        <div className={styles.sectionTitle}>CUSTOMERS</div>
        {renderMenuItems([
          { label: 'Users', icon: <img src={UsersIcon} alt="" />, path: '/users' },
          { label: 'Guarantors', icon: <img src={GuarantorsIcon} alt="" />, path: '/guarantors' },
          { label: 'Loans', icon: <img src={LoansIcon} alt="" />, path: '/loans' },
          { label: 'Decision Models', icon: <img src={DecisionModelsIcon} alt="" />, path: '/decision-models' },
          { label: 'Savings', icon: <img src={SavingsIcon} alt="" />, path: '/savings' },
          { label: 'Loan Requests', icon: <img src={LoanRequestsIcon} alt="" />, path: '/loan-requests' },
          { label: 'Whitelist', icon: <img src={WhitelistIcon} alt="" />, path: '/whitelist' },
          { label: 'Karma', icon: <img src={KarmaIcon} alt="" />, path: '/karma' },
        ])}

        {/* Businesses Section */}
        <div className={styles.sectionTitle}>BUSINESSES</div>
        {renderMenuItems([
          { label: 'Organization', icon: <img src={OrganizationIcon} alt="" />, path: '/organization' },
          { label: 'Loan Products', icon: <img src={LoanProductsIcon} alt="" />, path: '/loan-products' },
          { label: 'Savings Products', icon: <img src={SavingsProductsIcon} alt="" />, path: '/savings-products' },
          { label: 'Fees and Charges', icon: <img src={FeesIcon} alt="" /> , path: '/fees' },
          { label: 'Transactions', icon: <img src={TransactionsIcon} alt="" />, path: '/transactions' },
          { label: 'Services', icon: <img src={ServicesIcon} alt="" />, path: '/services' },
          { label: 'Service Account', icon: <img src={ServiceAccountIcon} alt="" />, path: '/service-account' },
          { label: 'Settlements', icon: <img src={SettlementsIcon} alt="" />, path: '/settlements' },
          { label: 'Reports', icon: <img src={ReportsIcon} alt="" />, path: '/reports' },
        ])}

        {/* Settings Section */}
        <div className={styles.sectionTitle}>SETTINGS</div>
        {renderMenuItems([
          { label: 'Fees and Pricing', icon: <img src={FeesPricingIcon} alt="" />, path: '/fees-pricing' },
          { label: 'Audit Logs', icon: <img src={AuditLogsIcon}  alt="" />, path: '/audit-logs' },
        ])}
      </ul>
    </nav>
    </>
  );
};

export default Sidebar;
